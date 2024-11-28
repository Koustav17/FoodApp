const connectDB = require('./model/connectDB');
const express = require('express');
var app = express();


app.listen(8000, () => {
  console.log('Server Is Running');
})