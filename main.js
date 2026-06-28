const {
 app,
 BrowserWindow,
 ipcMain
} = require("electron");


let win;


app.whenReady().then(()=>{

win = new BrowserWindow({
    width:1200,
    height:800,
    webPreferences:{
        nodeIntegration:true,
        contextIsolation:false
    }
});


win.loadFile("index.html");

});


ipcMain.on("open",(e,url)=>{

if(!url.startsWith("http"))
url="https://"+url;

win.loadURL(url);

});