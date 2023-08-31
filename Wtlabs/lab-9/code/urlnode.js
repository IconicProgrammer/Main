const http = require("http");
const url = require("url"); 
const PORT = 8000; 
const server = http.createServer(function (req, res) {
 const header = { "Content-Type": "application/json" }; 
 const parsed = url.parse(req.url, true); 
 const { pathname, query } = parsed; 
 const message = query?.message; 
 if (pathname === "/") { 
 res.writeHead(200, header); 
 res.write(JSON.stringify({ message: message })); 
 } 
 else { 
 res.writeHead(400, header); 
 res.write(JSON.stringify({ error: "Bad req" })); 
 } 
 res.end(); 
}); 
server.listen(PORT); 
console.log(`Listening at port ${PORT}`); 