var fs = require('fs'); 
fs.writeFile('node4.txt', 'file created by writeFile method', function (err) { 
  if (err) throw err; 
  console.log('file created...');
});