const express = require("express");
const app = express();
const mongoose = require("mongoose");
const restRouter = require("./routes/rest.router.js");

app.use(express.json());

app.listen(8081, ()=> {
    console.log("Application Started");
})

app.use("/api/restaurants", restRouter);

mongoose.connect("mongodb://0.0.0.0:27017/findRestuarants")
.then(() => {
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
})

