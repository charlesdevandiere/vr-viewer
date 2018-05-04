var electronInstaller = require('electron-winstaller');
const path = require('path')
const rootPath = path.join(__dirname, '..')
const outPath = path.join(rootPath, 'out')
var resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join(outPath, 'vr-viewer-win32-ia32'),
    outputDirectory: path.join(outPath, 'windows-installer'),
    authors: 'Charles de Vandiere',
    exe: 'vr-viewer.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
