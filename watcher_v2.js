const fs = require('fs')
const {exec, fork} = require('child_process')
const express = require('express')
const app = express()

let processId 
let state
app.get('/', (req, res)=>{
  processId = req.query.processId
})
app.listen(5000, () => console.log('Example app listening at http://localhost:5000'))

class State {
  constructor() {
    this.restart
  }
  startWebpack() {
    this.restart = fork('./runwebpack.js')
  }
  killWebpack() {
    this.restart.kill()
  }
}
const changeState = new State()

changeState.startWebpack()

// const offWebpack = () => {
//   exec(`tasklist /FI "PID eq ${processId}"`, (err, stdout) => {
//     if(!stdout) changeState.killWebpack()
//   });
// }

const webpackEntry = './webpack.config.js'
const electronEntry = './main.js'

fs.watchFile(webpackEntry, ()=>{
  console.log('webpack changed')
  changeState.killWebpack()
  exec(`taskkill /pid ${processId} /T /F `)
  changeState.startWebpack()
})

fs.watchFile(electronEntry, ()=>{
  console.log('electron changed')
  exec(`taskkill /pid ${processId} /T /F `)
  exec("electron .")
})

