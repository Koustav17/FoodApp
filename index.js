const express = require('express');
const FoodRouter = require('./controller/food');
const connectDB = require('./model/connectDB');
var app = express();

app.use(express.json());

app.use(FoodRouter);

app.listen(8000, () => {
  console.log('Server Is Running');
})