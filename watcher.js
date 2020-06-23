const fs = require('fs')
const {exec, fork} = require('child_process')
const express = require('express')
const app = express()

let processId 
app.get('/', (req, res)=>{
  processId = req.query.processId
})
app.listen(5000, () => console.log('Example app listening at http://localhost:5000'))

let startWebpack = fork('./runwebpack.js') //class => 상태관리

const webpackEntry = './webpack.config.js'
const electronEntry = './main.js'

fs.watchFile(webpackEntry, ()=>{
  console.log('webpack changed')
  startWebpack.kill()
  exec(`taskkill /pid ${processId} /T /F `)
  startWebpack = fork('./runwebpack.js')
})

fs.watchFile(electronEntry, ()=>{
  console.log('electron changed')
  exec(`taskkill /pid ${processId} /T /F `)
  exec("electron .")
})