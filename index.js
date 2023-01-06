const express = require('express')
const app = express()
const port = 8080

app.get("/", (req,res) =>{
    res.send("Bem vindo ao meu site!")
})

app.listen(port, ()=>{
   console.log("Servidor rodando na porta", port) 
})