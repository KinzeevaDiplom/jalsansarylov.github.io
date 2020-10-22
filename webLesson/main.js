const path = require("path");
const url = require("url");
const { app, BrowserWindow, protocol } = require("electron");
// переменная окна приложения
let win;
// функция открытия приложения
function createWindow() {
  win = new BrowserWindow({
    minWidth: 1200,
    minHeight: 800,
    icon: __dirname + "/img/icon.png",
    autoHideMenuBar: true,
    // frame: false,

    backgroundColor: '#333'

  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  // win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
