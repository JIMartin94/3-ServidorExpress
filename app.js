// import Contenedor from "./index.js";
const Contenedor = require('./index')
const express = require("express");
const app = express()

let productos = new Contenedor("productos.txt");

app.get("/productos",(req,resp)=>{
    productos.getAll().then(data =>{
        resp.send(data)
    }).catch(error =>{
        resp.send(error)
    })
})

app.get("/productoRandom",(req,resp)=>{
    productos.getProductoRandom().then(data =>{
        resp.send(data)
    }).catch(error =>{
        resp.send(error)
    })
})

const PORT = 8080;

const server = app.listen(PORT,()=>{
console.log(`Servidor escuchando por el puerto ${PORT}`);
})
server.on("error",err=>console.log(`Error en el servidor: ${err}`))