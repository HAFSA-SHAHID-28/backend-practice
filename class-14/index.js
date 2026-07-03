const express = require('express');
const multer = require('multer');
const app = express();

///////////// multer middleware

const storage = multer.diskStorage({
    destination: function (req, res, cb) {  ///// cb --- call back
        cb(null, "assets");
    },
    filename:   function (req, file, cb) {  ///// cb --- call back
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    }
});


const upload = multer({storage}); ////// upload middleware

app.post('/api/uploads', upload.single("image"), (req, res) => {    ///// "image ---- y ehi nam eh ye key h ess ise access milega , postman ya frontende se bhi same name se file aaigi"
    res.json({ message: 'Image uploaded successfully', image: req.file.filename});
})

app.listen(8000, () => console.log("Server is Running at 8000 port"));