const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')

//view engine
app.set('view engine', 'ejs')

//body parser
app.use(bodyParser.urlencoded({extends:false}))
app.use(bodyParser.json())

app.get("/", (req,res) =>{
    res.render("index")
})

app.listen(port, ()=>{
   console.log("Servidor rodando na porta", port) 
})