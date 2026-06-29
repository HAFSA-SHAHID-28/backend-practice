const mongoose = require("mongoose");

////////////////////// db connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(`ERROR in DB connection : ${err}`));
