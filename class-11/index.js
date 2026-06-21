const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Home');
});

app.post('/api/profile', (req, res)=>{
    res.set('Content-Type', 'application/json');
    res.set('X-Country', 'Pakistan');
    res.set('X-Language', 'Urdu');
    console.log("Secret Token:", req.headers.authorization);
    res.send('Headers ka kam chal gaaya!');
});


//////////////meri practice bina code dekhe khud se
app.post('/api/hafsa', (req, res)=>{
    res.set('Content-Type', 'application/json');
    res.set('X-City', 'Karachi');
    res.set('X-Color', 'Grey');
    console.log('Secret Hafsa Token:', req.headers.authorization);
    res.send('Hafsa ka header chal gya!!!!!');
});



///////////////////////////////////  frontend men hum code aise likhenge

// fetch('', {
//     method: 'POST',
//     headers:{
//         'Authorization': 'Bearer msds, dm, sdm, s',
//         'Content-Type': 'application/json'
//     }
// })

// axios.post('hafsa', (req,res)=>{
//     req.headers.authorization
// })


///////////////////////Api Status Code

///// 200 ---- Success
///// 201 ---- Data Created
///// 204 ---- Data nhi mila empty

///// 302 ---- Temporary redirection
///// 301 ---- permanant redirection

///// 400 ---- Bad request | Data galat send kia hai
///// 401 ---- UnAuthorized | Login nahi hai
///// 403 ---- Access Denied
///// 404 ---- Resource nahi mile

///// 500 ---- Internal Server Error
///// 503 ---- Service Unavailable



app.get('/api/courses', (req, res)=>{
    res.status(204).json({});   ////// postman pr get req pr 204 hi aaya!!!
})



////////// ye tab kam krea jab esmen app.use(express.json()); ye laga ho!!!

app.post('/api/users', (req, res)=>{
    const { pswd, email, name, destination } = req.body;
    if (!pswd || !email) {
        return res.status(400).json({ meassage: 'Missing required field'});
    }
    res.status(201).json({meassage: 'User Created Successfully'});
});

app.listen(8000, ()=> console.log('Server is running at 8000 port'));