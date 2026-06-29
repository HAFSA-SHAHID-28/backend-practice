// ////////////////// saar kam aik h ijagah 

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// ////////////////////// Middleware

// app.use(express.json());



// ////////////////////// db connection

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('DB is connected'))
//     .catch((err) => console.log(`ERROR in DB connection : ${err}`));


// /////////////////////  Schema

// const employSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     contact: {
//         type: Number,
//         required: true
//     },
//     department: {
//         type: String,
//         required: true
//     },
//     isActive: {
//         type:Boolean,
//         default: true
//     }
// });
// //////////////// Model

// const Employ = mongoose.model('Employ', employSchema);




// //////////////////// Routes

// app.post('/api/employ', async (req, res) => {
//   const data =  await  new Employ(req.body);
//  const result = await data.save();
 
//  res.json({msg: 'data created successfully', data:result})
// })


// //////////////////MVC ----Model View Controller
// //// Modal men sara database ka kam, sari queirs sab modal men hoga
// /// View ye hota h frontend wala kam, jo cheez ui pr nazar aai, UI wala kam
// // Controller jitni bhi req aai, beech ka kam sab ye krta h

// app.get('/', (req, res) =>{
//     res.send('Home Page')
// });

// app.listen(8000, () => console.log('Server is running at 8000'));






///////////////////////////////////  alag alag files men kam 

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');   ////// eske bagair error dega
const empRoutes = require('./routes/empRoutes');
require('./config/config');
const app = express();

////////////////////// Middleware

app.use(express.json());



////////////////////// db connection


/////////////////////  Schema


//////////////// Model





//////////////////// Routes

// app.post('/api/employ')


//////////////////MVC ----Modal View Controller
//// Modal men sara database ka kam, sari queirs sab modal men hoga
/// View ye hota h frontend wala kam, jo cheez ui pr nazar aai, UI wala kam
// Controller jitni bhi req aai, beech ka kam sab ye krta h


app.use('/api/employ', empRoutes);

app.get('/', (req, res) =>{
    res.send('Home Page')
});

app.listen(8000, () => console.log('Server is running at 8000')); 