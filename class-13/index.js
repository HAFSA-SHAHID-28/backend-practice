require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

////////////////////// Middleware

app.use(express.json());



////////////////////// db connection

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB is connected'))
    .catch((err) => console.log(`ERROR in DB connection : ${err}`));


/////////////////////  Schema

const employSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    isActive: {
        type:Boolean,
        default: true
    }
});
//////////////// Model

const Employ = mongoose.model('Employ', employSchema);




//////////////////// Routes

app.post('/api/employ', async (req, res) => {
  const data =  await  new Employ(req.body);
 const result = await data.save();
 
 res.json({msg: 'data created successfully', data:result})
})

app.get('/', (req, res) =>{
    res.send('Home Page')
});

app.listen(8000, () => console.log('Server is running at 8000'));