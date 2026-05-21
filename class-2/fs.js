/////////// fs 
////// main for use fs 
const fs = require("fs");


/// to create new file
fs.writeFileSync("product.js", "console.log('Its My First File')");
fs.writeFileSync("File.txt", "Hello");// fs is not fdeined error bcoz mene cost fs ko comment krdia for check ke agar woh na ho tou konsa error aaygea


//// to read file 
const data = fs.readFileSync("product.js", "utf-8");
console.log(data);


const data = fs.readFileSync("product.js");
console.log(data);

//// to delete file

fs.unlinkSync("File.txt");


//////////////////////////////////////////////////

const fs = require("fs");
fs.writeFileSync("Test.txt", "Meri 2nd File");

const data = fs.readFileSync("Test.txt");
console.log(data);/// without utf-8 ye output aaya  <Buffer 4d 65 72 69 20 32 6e 64 20 46 69 6c 65> 



const data = fs.readFileSync("Test.txt", "utf-8");
console.log(data);



//// blocking task --- synchronous
//// non-blocking task --- Asynchronous



/// using sync 
const data = fs.readFileSync("Test.txt", "utf-8");
console.log(data);
console.log("Next line");


using async
fs.readFile("Test.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Next line");



fs.readFile("Test.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("Second Line");
fs.writeFile("Text1.txt", "Hello World", (err, data)=>{});


fs.readFile("Text1.txt", "utf-8", (err,data)=> {
  if(err) console.log(err);
  console.log(data);
}
)


console.log("dir ----------- ",__dirname);////  G:\hafsa\web development\assignments\practice\backend\class-2
console.log("dir ----------- ",__filename);///// G:\hafsa\web development\assignments\practice\backend\class-2\index.js

