const express = require("express")
const server = express()
const pessoas = require("./src/respira.json")
const aaa = require("./src/respira.json")
const livros = require("./src/biblioteca.json")



server.get("/", (req, res)=>{
    return res.json({mesagem:"mi corazon, sangre llovera de mis oraciones"})
})

server.get("/teste", (req, res)=>{
    return res.json({mensagem:"a donde vayas, ya no me importa"})
})

server.get("/pacoca", (req, res)=>{
    return res.json({mensagem:"este vinculo es eterno ahora"})
})


server.get("/abroba", (req, res)=>{
    return res.json({mensagem:"puede correr mi corazon"})
})

server.get("/pessoas", (req, res)=>{
    return res.json(aaa)
})

server.listen(3693, ()=>{
    console.log('ta funcionando meu patrao')
})