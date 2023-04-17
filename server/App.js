

const dotenv = require("dotenv");

const mongoose= require('mongoose');
const express = require('express');
const app = express();
dotenv.config({ path: './config.env'});
require('./db/conn');
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
//const User = require('./model/userSchema');
app.use(require('./routers/auth'));
const PORT = process.env.PORT||5000;

console.log("hello Anurag");
app.listen(PORT,()=>{
    console.log(`running on port nso $(PORT)`);
})