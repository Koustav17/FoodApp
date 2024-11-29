require("dotenv").config();
const connectURL = `${process.env.connecDBURL}`;
const mongoose = require('mongoose');

mongoose.connect(connectURL)
  .then(() =>  { 
    console.log('Connected to MongoDB!');
}).catch(err => {
    console.log("error", err.message);
})