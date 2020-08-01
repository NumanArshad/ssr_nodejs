import express from 'express'
import fs from 'fs'
import path from 'path'
const app=express()
const PORT=8000
import React from 'react'
import ReactDomServer from 'react-dom/server'
import App from '../src/App'
app.use('^/$',(req,res,next)=>{
    fs.readFile('./build/index.html','utf-8',(err,data)=>{
        if(err){
            console.log("some error occured")
            return res.status(500).send("some error occured")
        }
        return res.send(data.replace("<div id='root'></div>",
        `<div id='root'>${ReactDomServer.renderToString(<App />)}</div>`))
    })
})

app.use(express.static(path.resolve(__dirname,'..','build')))
app.listen(PORT,()=>{
    console.log(`app launced on ${PORT}`)
})