const express = require('express');
const FoodRouter = require('./controller/food');
const connectDB = require('./model/connectDB');
const path = require('path');
var app = express();

app.get('/upload/:filename', (req, res) => {
    res.sendFile(path.join(__dirname + '/upload/' +
    req.params.filename));
})

app.use(express.json());
app.use(FoodRouter);


module.exports = app;