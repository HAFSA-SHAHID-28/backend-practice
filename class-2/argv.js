////////// argv 

console.log(process.argv[2]); // undefines 

const fs = require("fs");



fs.readFile("Test.txt", "utf-8", (err, data) => {
});
fs.writeFile("Text1.txt", "Hello World", (err, data)=>{});


fs.readFile("Text1.txt", "utf-8", (err,data)=> {
  if(err) console.log(err);
}
)

const file = process.argv;

if(file[2] === "add") {
  fs.writeFileSync(file[3], `--------- ${file[4]}`);
}

console.log(process.argv[3]);


const fs = require("fs");

const file = process.argv;

fs.writeFileSync(file[2], file[3]);

console.log(file);

if (file[2] === "add") {
  fs.writeFileSync(file[3], `------------ ${file[4]}`);///// node index.js add Text2.txt NewfILE
} else if (file[2] === "remove") {
  fs.unlinkSync(file[3]);
} else {
  console.log("Invalid Support");
  
}
