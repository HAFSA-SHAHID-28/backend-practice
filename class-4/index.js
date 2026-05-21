const express = require('express');
const app = express();

const data = [
    {title: "Shampoo", price:500},
    {title: "Soap", price:300}
]

app.get('', (req, res)=>{
    res.send('My Home Page')
});

app.get('/products', (req, res)=>{
    // const data = [{title: "Shampoo", price:500},{title: "Soap", price:300}]   /////////////  hum yahi kam uper ya kahin bhi variable men store krwa kr krkste hain  
    // res.send(data);///// koi farq tou nhi aaya send or json men
    res.json({
            success: true,
            data: data
})
    ///// res.send(`Products Page: ${req.query.brand}`)/////// output Products Page: jo query bhjo ge woh
})

app.get('/*xyz', (req, res)=>{
    ///res.end(`404 PAGE`)//////  samen send wala kam hi tou krrha h
    res.send(`404 PAGE `)
})


app.listen(8000, ()=> console.log('Server is Runnning at 8000')
)