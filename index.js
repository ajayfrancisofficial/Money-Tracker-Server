require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/Connection')

const mtServer=express()

mtServer.use(cors())
mtServer.use(express.json())

mtServer.use(router)

const PORT=3000 || process.env.PORT
mtServer.listen(PORT,()=>{
    console.log(`Server started at port${PORT}`);
})

mtServer.get('/',(req,res)=>{
    res.send(`server started at PORT${PORT} and waiting for client requests`)
})

