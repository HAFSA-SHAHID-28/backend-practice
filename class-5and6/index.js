// const express = require("express");
// const products = require('./data');
// const path = require('path');
// const app = express();


///////////////////////////////// 

// const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath))




// app.get('/', (req, res) => {
//   res.send(`
//         <h1> Class # 05 </h1> 
//         <p>JavaScript (JS) is a dynamic programming language primarily used to build interactive and dynamic websites. Along with HTML and CSS, it forms the core trio of web technologies. While HTML provides the structure and CSS handles styling, JS powers functionalities like animations, data processing, and dynamic updates.</p>
//         `);
// });

// app.get('/', (req, res)=>{
//     res.sendFile(`${publicPath}/html/index.html`);
// });

// app.get('/about', (req, res)=>{
//     res.sendFile(`${publicPath}/html/about.html`);
// });



// ////// csr  //// ssr


// app.get('/products', (req, res)=>{
//     res.send(products);
// })

// app.listen(8000, () => console.log("Server is Running at 8000 post"));







/////////////////////////////  ejs (embedded js)

const express = require('express');
const path = require('path');
const app = express();

//////////////////// to make the folder public !!!!!!!!!!!
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));


app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    // res.send('hello pagal');
    res.render('index', {});
});

app.get('/profile', (req, res)=>{
    const user = {
        image: "https://cdn.vectorstock.com/i/500p/01/62/software-developer-cartoon-vector-58780162.jpg",
        name: "Hafsa Shahid",
        email: "hafsa.example@gmail.com",
        contact: "+921234123456",
        address: "Numaish Campus",
        experience: 1,
        skills: ["sleeping", "working", "patience", "eating"]

    }
    res.render('profile', {user});
});

app.get('/v1/faq', (req, res)=>{
    res.render('faq', {content: "<p>Hello HAFSA!!!!"});
});

app.get('/v2/faq', (req, res)=>{
    res.render('faq', {content: "<p>Hello HAFSA!!!!------------ v2"});
});

app.listen(8000, ()=> console.log("server is running at 8000 port")
)












