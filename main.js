const { app, BrowserWindow } = require('electron')
const axios = require('axios')
const { stat } = require('fs')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadURL("http://localhost:9000")
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
  console.log('electron closed')
  app.quit()
})

axios.get('http://localhost:5000', {
  params: {
    processId: process.pid,
  }
})


