const { app, BrowserWindow } = require("electron");

let win;

function createWindow(){
    //create the browser window.
    win = new BrowserWindow()

    win.loadURL('file://${__dirname}/dist/index.html')

    win.on('closed', function(){
        win = null
    })

    win.webContents.openDevTools()

}

//Create window on electron initialization
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', function(){
    //On macOS spectific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function(){
    //macOs specific close process
    if (win === null){
        createWindow()
    }
})