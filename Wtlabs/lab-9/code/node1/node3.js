var fs = require('fs'); 
 
fs.open('node3.txt', 'w', function (err, file) { 
  if (err) throw err;
  console.log('file created..'); 
});