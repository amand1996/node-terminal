const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var renderer = require('./renderer.js');

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 650, height: 400})

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  //mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {

    mainWindow = null
  })
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

app.post('/child_process', function(req, res){
  
})
