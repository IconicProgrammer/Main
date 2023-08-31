var fs = require('fs'); 
fs.unlink('node4.txt', function (err) { 
 if (err) throw err; 
console.log('File deleted!');
});