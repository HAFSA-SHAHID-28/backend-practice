const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()); /////// pass raw data

app.get('/', (req, res)=>{
    res.send('Home');
});



//////////////////  rest api


app.get('/api/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = data.find((user)=> user.id === Number(id));
    res.json(user);
})

app.get('/api/users/', (req, res)=>{
    res.json(data);
})


app.post('/api/users', (req, res)=>{
    data.push({...req.body, id: data.length+1});
    fs.writeFile('data.json', JSON.stringify(data), (err, data)=>{
        if (err) console.log(err);
           res.json({message: 'User created successfully!'})       
    });
    console.log(data);
    
    // res.send(req.body);
});

app.listen(8000, ()=> console.log('Server is Running at port 8000')
)