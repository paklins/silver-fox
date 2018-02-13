const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;
let splashScreen;
let windowInitialized = false;

function initSplashScreen(){
	splashScreen = new BrowserWindow( { width: 320, height: 240, frame: false } );

	splashScreen.loadURL( 
		url.format({
			pathname: path.join(__dirname, 'splash-screen.html'),
			protocol: 'file',
			slashes: true
		})
	 );

	createMainWindow();

	setTimeout(() => {
		if( windowInitialized ){
			splashScreen.close();
		}
	}, 2000 );

	splashScreen.on( 'closed', () =>{
		splashScreen = null;
	});
}

function createMainWindow () {

  win = new BrowserWindow({width: 800, height: 600, frame: false, show: false})

  // load the dist folder from Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools optionally:
  // win.webContents.openDevTools()

  //win.webContents.openDevTools();

  win.once( 'ready-to-show', ()=>{
		windowInitialized = true;
	  	win.show();
  });

  win.on('closed', () => {
    win = null
  })
}

app.on( 'ready', initSplashScreen );

app.on( 'window-all-closed', () => {
  if ( process.platform !== 'darwin' ) {
    app.quit()
  }
});

app.on('activate', () => {
  if ( splashScreen === null) {
    initSplashScreen();
  }
});