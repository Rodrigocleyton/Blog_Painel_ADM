const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const connetion = require('./dataBase/database')
const CategoriesController = require("./categories/CategoriesController")

//view engine
app.set('view engine', 'ejs')

//static
app.use(express.static('public'))

//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//DataBase
connetion 
    .authenticate()
    .then(()=>{
        console.log("DataBase connectio sucess")
    }).catch((error)=>{
        console.log("Not DaraBase connection", error)
    })

//utilização do rotas do arquivos categoriesController
app.use("/", CategoriesController)


app.get("/", (req,res) =>{
    res.render("index")
})

app.listen(port, ()=>{
   console.log("Servidor rodando na porta", port) 
})