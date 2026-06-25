// const {MongoClient} = require("mongodb");


// //////// meri string connect ke bad witout srv wali string leni h
// const url = 'mongodb://hafsashahid282007_db_user:tulip2827@ac-rhlifbp-shard-00-00.tbisrad.mongodb.net:27017,ac-rhlifbp-shard-00-01.tbisrad.mongodb.net:27017,ac-rhlifbp-shard-00-02.tbisrad.mongodb.net:27017/?ssl=true&replicaSet=atlas-ypn0pm-shard-0&authSource=admin&appName=Cluster0';


// const client =  new MongoClient(url);

// const checkDb = async () => {
//     try {

//         await client.connect();
//         console.log("Database connected successfully! 🎉");

//         const db = client.db('e-store');
//         const userRef = db.collection('users');

//         const result = await userRef.insertOne({
//             name: 'Hafsa',
//             email: 'hafsa@gmail.com',
//             role: 'user',
//             gender: 'female'
//         })
//         console.log("Data Inserted:", result);

//     } catch (error) {
//         console.log(error);

//     } finally {
//         await client.close();
//     }
// }

// checkDb();


/////////////// by using another file

// const db = require('./db');

// const checkDb = async () => {
//     try {


//         const userRef = (await db()).collection('users');

//         const result = await userRef.insertOne({
//             name: 'Fatima',
//             email: 'fatima@gmail.com',
//             role: 'user',
//             gender: 'female'
//         })
//         console.log("Data Inserted:", result);

//     } catch (error) {
//         console.log(error);

//     } 
// }

// checkDb();



//////////////////////////////////----------------------------------------------////////////////////////////////////
//////////////      PERFORMING CRUD  ////////////////////////


///////  SETUP OF SERVER 

const express = require('express');
const db = require('./db');
const { ObjectId } = require('mongodb');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Home');
});


///////////////  Create Product

app.post('/api/products', async (req, res) => {
    try {
        const productRef = (await db()).collection('products');
        const result = await productRef.insertOne(req.body);
        //////const result = await productRef.insertMany(req.body); for many user

        if (result.acknowledged) {
            res.status(201).send({ message: "Product Created!" })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Error in Product"})
    }

});


//////////// Get All Products

app.get('/api/products', async (req, res) =>{
    const productRef = (await db()).collection('products');
    const data = await productRef.find().toArray();
    res.status(200).json({message: "Products get successfully!", data})
});



app.listen(8000, () => console.log('Server is Running at 8000'));