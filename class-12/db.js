require('dotenv').config();

const {MongoClient} = require("mongodb");


//////// meri string connect ke bad witout srv wali string leni h
const uri = process.env.MONGO_URI;


const client =  new MongoClient(uri);

const connectDb = async () => {
    
        await client.connect();
        console.log("Database connected successfully! 🎉");
    const database = client.db('e-com');

    return database;
}

module.exports = connectDb;