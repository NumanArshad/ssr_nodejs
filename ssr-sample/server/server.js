import express from 'express'
import fs from 'fs'
import path from 'path'
import store from '../src/store'
import {Provider} from 'react-redux'
import ReactDomServer from 'react-dom/server'

import Root from '../src/routes'
const app=express()
const PORT=8000
import React from 'react'
import App from '../src/App'

// app.use('^/$',(req,res,next)=>{
//     fs.readFile('./build/index.html','utf-8',(err,data)=>{
//         if(err){
//             console.log("some error occured")
//             return res.status(500).send("some error occured")
//         }
//         return res.send(data.replace("<div id='root'></div>",
//         `<div id='root'>${ReactDomServer.renderToString(<App />)}</div>`))
//     })
// })
// app.use(express.static(path.resolve(__dirname,'..','build')))
app.use(handleRender)
function handleRender(req,res){
    const html = ReactDomServer.renderToString(<Provider store={store}><App /></Provider>)

const preloadedState=store.getState()
return res.send(renderFullPage(html,preloadedState))
}

function renderFullPage(html,preloadedState){
    return ` <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
`
}

app.listen(PORT,()=>{
    console.log(`app launced on ${PORT}`)
})