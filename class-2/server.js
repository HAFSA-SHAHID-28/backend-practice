// //////////////////////// basic server (my first server)


const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(8000, ()=>{
  console.log("server running");
  
})

const http = require("http");
const server = http.createServer((req, res)=>{
  res.write("<h1>My Name Is HAFSA</h1>");
  res.write("<h1>Http response By Hafsa</h1>");
  res.end();
});

server.listen(4000, ()=>{
  console.log("server running");
  
})

const http = require("http");
http.createServer((req, res) => {
  res.write("<h1>My first server</h1>");
}).listen(8000, ()=>console.log("Server is Running on port 8000"))

