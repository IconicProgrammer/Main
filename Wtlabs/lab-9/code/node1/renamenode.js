var fs = require('fs'); 
fs.rename('node3.txt', 'renamed.txt', function (err) { 
 if (err) throw err; 
console.log('renamed successful'); 
});