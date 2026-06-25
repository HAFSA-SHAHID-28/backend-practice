const {MongoClient} = require("mongodb");


//////// meri string connect ke bad witout srv wali string leni h
const uri = 'mongodb://hafsashahid282007_db_user:tulip2827@ac-rhlifbp-shard-00-00.tbisrad.mongodb.net:27017,ac-rhlifbp-shard-00-01.tbisrad.mongodb.net:27017,ac-rhlifbp-shard-00-02.tbisrad.mongodb.net:27017/?ssl=true&replicaSet=atlas-ypn0pm-shard-0&authSource=admin&appName=Cluster0';


const client =  new MongoClient(uri);

const connectDb = async () => {
    
        await client.connect();
        console.log("Database connected successfully! 🎉");
    const database = client.db('e-com');

    return database;
}

module.exports = connectDb;