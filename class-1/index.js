//////  node js

// console.log("intelligent bache");
// console.log("pagal bache");


// ///////////  mjs  ye modern js h, by default off, basic syntax
//  import data from "./file.js";
//  export default data;


////  cjs ye common js h, by default on, basic syntax
//  const data = require("./file");
//  module.exports = data;


// import {username} from './app.js'
// console.log(username); // output: Misbah


// const username = require("./app");
// console.log(username); // output: hafsa


// const a = require("./helper");
// console.log(a(2,3)); // 6 , a - default export, mgr wahn helper men coreet krne kebad ye a type error dene laga a fuction is not defined jke pehle esne output de dia tha!


// const {sum, multiply, fullName} = require("./helper");
// console.log(sum(2,2)); // output 4
// console.log(sum(2,6)); // output 12 esne sum ke bajai multily krdia, usne override krdia sum chod kr multiply pakd lia
// console.log(sum(2,7)); // helper men thk krne ke bad 9
// console.log(fullName); // fatima 
// console.log(multiply(2,7)); // 14


// import test from './app.js'
// console.log(test); // SyntaxError: Cannot use import statement outside a module

///// External module

// let colors = require('colors');
// console.log("Hello".zebra.underline);


const divide = require("./helper");
console.log(divide(2,7));

