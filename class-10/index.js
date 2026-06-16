const express = require('express');
const {checkAge, checkGender, checkCountry} = require('./middleware');
const app = express();


//////////////////////  Middleware


app.use(checkAge);////Application level middleware
app.use(checkGender);
app.use(checkCountry);


app.get('/', (req, res)=>{
    res.send('Home');
});


app.get('/products', (req, res)=>{
    res.send('Home');
});



app.get('/orders', checkCountry, checkGender, (req, res)=>{
    res.send('Order Page');
});



app.listen(8000, ()=> console.log('Server is running at port 8000'));