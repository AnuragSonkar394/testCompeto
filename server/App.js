

const dotenv = require("dotenv");

const mongoose= require('mongoose');
const express = require('express');
const app = express();
dotenv.config({ path: './config.env'});
require('./db/conn');
const path = require('path');


app.use(express.json());
//const User = require('./model/userSchema');
app.use(require('./routers/auth'));
const PORT = process.env.PORT||5000;
if(process.env.NODE_ENV=="production"){
    app.use(express.static(path.join(__dirname, 'build')));
    app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
})
}
    
    


console.log("hello Anurag");
app.listen(PORT,()=>{
    console.log(`running on port nso $(PORT)`);
})