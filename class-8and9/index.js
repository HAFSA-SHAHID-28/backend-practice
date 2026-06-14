// const express = require('express');
// const fs = require('fs');
// const data = require('./data.json');
// const { json } = require('stream/consumers');
// const app = express();

// ///////// middleware ke sab user ko direct login na mile
// app.use(express.urlencoded({extended: true}));
// app.use(express.json()); /////// pass raw data

// app.get('/', (req, res)=>{
//     res.send('Home');
// });



// //////////////////  rest api


// // app.get('/api/users/:id', (req, res)=>{
// //     const id = req.params.id;
// //     const user = data.find((user)=> user.id === Number(id));
// //     res.json(user);
// // })

// app.get('/api/users/', (req, res)=>{
//     res.json(data);
// })


// /////////////// to add data

// app.post('/api/users', (req, res)=>{
//     data.push({...req.body, id: data.length+1});
//     fs.writeFile('data.json', JSON.stringify(data), (err, data)=>{
//         if (err) console.log(err);
//            res.json({message: 'User created successfully!'})       
//     });
//     console.log(data);

//     // res.send(req.body);
// });

// app.post('/api/people', (req, res)=>{
//     data.push({...req.body, id: data.length + 1});
//     fs.writeFile('data.json', JSON.stringify(data), (err, data)=>{
//         if(err) console.log(err);
//         res.json({message: 'user is made by me!'})
        
//     });
// });



// //////////////// update


// // app.patch('/api/users/:id', (req, res)=>{
// //     const id = req.params.id; 
// //     const reqData = req.body;
// //     let user = data.find((user)=> user.id === Number(id));
// //     console.log(reqData);
// //     for (const key in reqData) {
// //         if (Object.prototype.hasOwnProperty.call(user, key)) {
// //             user = {
// //                 ...user, [key]:  reqData[key] 
// //             }
// //         }
// //     }

// //     data[user.id - 1] = user;

// //     // fs.writeFile('data.json', JSON.stringify(data), (err, data)=>{
// //     fs.writeFile('data.json', JSON.stringify(data), (err)=>{
// //         return res.json({message: 'User updated successfully!', user});
// //     })

// //     // res.json(user);
// // })





// app.patch('/api/people/:id', (req, res)=>{
//     const id = req.params.id;
//     const updates = req.body;
//     let user = data.find((u) => u.id === Number(id));
//     if (!user) {
//     return res.status(404).json({ message: "User not found" });
// }
    
//     for (const key in updates) {
//         if (Object.prototype.hasOwnProperty.call(user, key)){
//             user[key] = updates[key];
//         }           
//     }
//     data[user.id - 1] = user;

//     fs.writeFile('data.json', JSON.stringify(data), (err)=>{
//         return res.json({message: 'User is updated by me!', user});
//     })
// })




// //////////////////////// delete

// app.delete('/api/users/:id', (req, res)=>{
//     const id = req.params.id;
//     let users = data.filter((user)=> user.id !== Number(id));
//     fs.writeFile('data.json', JSON.stringify(users), (err, data)=> {
//         return res.json({message: 'User is deleted successfully!'});
//     })
// })

// app.delete('/api/peoples/:id', (req, res)=>{
//     const id = req.params.id;
//     let users = data.filter((user)=> user.id !== Number(id));
//     fs.writeFile('data.json', JSON.stringify(users), (err, data)=> {
//         return res.json({message: 'User is deleted by me'});
//     })
// })



// app.listen(8000, ()=> console.log('Server is Running at port 8000')
// )




//////////////////////////////////////////  gemini practice

const express = require('express');
const fs = require('fs');
const books = require('./books.json');
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/api/book', (req, res)=>{
    res.json(books); 
    
})


app.get('/api/book/:id', (req, res)=>{
    const id = req.params.id;
    let users = books.find((book)=> book.id === Number(id));
    res.json(users); 
})


app.delete('/api/book/:id', (req, res)=>{
    const id = req.params.id;
    let users = books.filter((book)=> book.id !== Number(id));
    fs.writeFile('books.json', JSON.stringify(users), (err)=>{
        return res.json({message: 'User is deleted'});
    })
})




////////////// all methods in one route
////////// route ko dot se separate krke likehenge
app.route('/api/users/:id')
.get(

).patch(

).delete(
    (req, res) => {
  const id = req.params.id;
  const user = data.find((user) => user.id === Number(id));
  res.json(user);
}
)



app.listen(8000, ()=> console.log('server is running at 8000'))