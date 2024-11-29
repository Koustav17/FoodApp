const express = require('express');
const FoodRouter = require('./controller/food');
const connectDB = require('./model/connectDB');
var app = express();

app.use(express.json());
app.use(FoodRouter);

module.exports = app;