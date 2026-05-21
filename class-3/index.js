// const fs = require("fs");

// fs.writeFile("text.txt", "Hello New File", (err, data) =>{});

// /////////////  to update

// fs.appendFile("text.txt", "\nChange File", ()=>{})
// fs.appendFile("text.txt", "\nChange File", ()=>{})
// fs.appendFile("text.txt", "\nHappy Birthday", ()=>{})

// fs.appendFile("text.txt", "\nBye Bye", ()=>{})

// /////// path

// const fs = require("fs");
// const path = require("path");

// console.log(__dirname); /// G:\hafsa\web development\assignments\practice\backend\class-3

// const dirPath = path.join(__dirname, 'files');
//     console.log(dirPath);

// fs.writeFile(`${dirPath}/test.txt`, 'Happy Birthday', ()=>{});

// fs.writeFile(`${dirPath}/human.txt`, 'Human', ()=>{});

// // /////////  to create multiple file
// for (let i = 1; i <= 5; i++) {
//     fs.writeFile(
//         `${dirPath}/test${i}.txt`,
//         `${i} ------  file created`,
//         ()=>{}
//     );
// }

////////////// to read file

// fs.readdir(dirPath, (err, data)=> {
//     // console.log(data[3]);
//     // console.log(data);
//     fs.readFile(`${dirPath}/${data[3]}`, 'utf-8', (err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log(data[3]);

//         }
//     })
// })

/////////////////////// server

// const fs = require("fs");
// const http = require("http");

///// Method 1  ye error de rhe h bss aik hi dafa chalta h uske bad nhi
// const server = http.createServer((req, res) => {
//    if (req.url === '/favicon.ico') {
//   } else {
//     const log = `${req.url} --- Time: ${Date.now()} --- mera page\n`;
//     fs.appendFile("log.txt", log, () => {});
//     res.end("hello");
//   }
// });

//////////// Method 2 --- espr chal gaya multiple times
// const server = http.createServer((req, res) => {
//   if (req.url !== "/favicon.ico") {
//     const log = `${req.url} --- Time: ${Date.now() } --- mera page\n`;
//     fs.appendFile("log.txt", log, () => {});
//   }
//    res.end("hello");
// });








/////////////// Method 3 ---  alag alag data send krwana ho tou

// const url = require('url');

// const server = http.createServer((req, res) => {
//   if (req.url !== "/favicon.ico") {
//     const log = `${req.url} --- Time: ${(Date.now())} --- mera page\n`;
//     const parseUrl = url.parse(req.url, true);
//     console.log(parseUrl);
    
//     fs.appendFile("log.txt", log, () => {
//       switch (parseUrl.pathname) {
//         case "/":
//           res.end("home");
//           break;

//         case "/products":
//           res.end("Products");
//           break;

//           case "/orders":
//           res.end("Orders");
//           break;

//           case "/about":
//           res.end("About");
//           break;

//           case "/services":
//           res.end("Services");
//           break;

//           default: res.end("404 Page not found");
//       }
//     });
//   }

//   res.end('Hello')

// });

// server.listen(8000, () => console.log("server is running on port 8000"));
















///////////////////////////  Method 4

const url = require('url');
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    const log = `${req.url} --- Time: ${(Date.now())} --- mera page\n`;
    const parseUrl = url.parse(req.url, true);
    // console.log(parseUrl);
    
    fs.appendFile("log.txt", log, () => {
      switch (parseUrl.pathname) {
        case "/":
          res.end("home");
          break;

        case "/products":
          if (req.method === "POST") {
            res.end("Product created successfully");
          } else if (req.method === "GET") {
             res.end("Limca - Lemon + Mint");
          }
          res.end(`Products Page : method: ${req.method} - QUERY: Brand - ${parseUrl.query.brand} + ${parseUrl.query.price}`);
          break;

          case "/orders":
            res.writeHead(200, {"content-type": "application/json"})
          res.end("Orders");
          break;

          case "/about":
          res.end("About");
          break;

          case "/services":
          res.end("Services");
          break;

          default: res.end("404 Page not found");
      }
    });
  }

  // res.end('Hello')
// console.log(req.method); ///GET
});

server.listen(8000, () => console.log("server is running on port 8000"));




////////////////////////////////////

const url = require('url');
const fs = require('fs');
const url = require('url');































