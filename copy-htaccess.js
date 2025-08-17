const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'src', 'assets');
const destPath = path.join(__dirname, 'dist', 'augenpraxis-kassel', 'browser');

// .htaccess
const htaSource = path.join(sourcePath, '.htaccess');
const htaDest = path.join(destPath, '.htaccess');
fs.copyFile(htaSource, htaDest, (err) => {
  if (err) {
    console.error('Failed to copy .htaccess:', err);
  } else {
    console.log('.htaccess copied to dist folder.');
  }
});