require('dotenv').config()
require('./configs/db')
const express=require('express')
const cors=require('cors')
const Router=require('./routes/router')

const server=express()

server.use(cors())
server.use(express.json())
server.use(Router)

const PORT=process.env.PORT||3000

server.listen(PORT,()=>{
    console.log("Server Running on PORT",PORT)
})