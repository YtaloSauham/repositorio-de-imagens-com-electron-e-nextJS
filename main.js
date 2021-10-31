const { app, BrowserWindow } = require('electron')


function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('.next/server/pages/index.html') // PRODUÇÃO: Run build
    win.loadURL('http://localhost:3000') //Desenvolvimento
  }

  app.whenReady().then(() => {
    createWindow()
  })