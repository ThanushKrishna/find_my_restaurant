const express = require('express');
const app = express();
const mangoose = requrie('mangoose');
const restRouter = require('./routes/rest.router.js');

app.use(express.json());

app.listen(8081, ()=> {
    console.log("Application Started");
})

mangoose.connect("mangod://192.168.1.101:27017/restuarants_db")
.then(() => {
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
})

