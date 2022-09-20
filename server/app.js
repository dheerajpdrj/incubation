const express = require('express');
const mongoose = require('mongoose');

const app = express();






mongoose.connect('mongodb://localhost:27017/incubation').then(()=>{
    console.log('Connection Successfull');
}).catch((e)=>{
    console.log('Connection Error');
})

