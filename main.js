const { app, BrowserWindow } = require("electron");

let win;

function createWindow(){
    //create the browser window.
    win = new BrowserWindow({
        width = 800;
        height = 600;
    })

    win.loadFile(`file://${__dirname}/src/index.html`)

    win.on('closed', function(){
        win = null;
    })

}

//Create window on electron initialization
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', function(){
    //non macOS spectific close process
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function(){
    //macOs specific close process
    if (win === null){
        createWindow();
    }
})