const connectURL = 'mongodb+srv://koustav:Koustav.cloud8334@cluster0.kw7ir.mongodb.net/FoodApp';
const mongoose = require('mongoose');

mongoose.connect(connectURL)
  .then(() =>  { 
    console.log('Connected to MongoDB!');
}).catch(err => {
    console.log("error", err.message);
})