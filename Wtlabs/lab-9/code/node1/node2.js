var fs = require('fs'); 
 
fs.appendFile('node2.txt', 'File create by using appendFile method!', function (err) { 
  if (err) throw err; 
  console.log('file created..');
}); 