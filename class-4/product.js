const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("My Home Page");
})

app.get("*", (req, res)=>{
    // res.send('404 ERROR');
    res.status(404).send('404 ERROR');
})

app.listen(8000, ()=> console.log("Server is running at 8000 port")
)


/////////////////// practicesd by myself without cheating