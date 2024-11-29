const express = require("express");
var foodRouter = express.Router();
const FoodSchema = require('../model/foodSchema');

foodRouter.post('/createOrder', async (req, res) => {
    console.log('Req:', req.params);
    let payload = {
        OrderId: req.body.OrderId,
        OrderName: req.body.OrderName,
        FoodName: req.body.FoodName
    }
    await FoodSchema.create(payload).then((data) => {
        if (data) {
            res.status(201).json({ message: "Order Created" });
        }
    }).catch(err => {
        res.status(400).json({ message: err.message });
    })
});

foodRouter.get('/getOrder', async(req, res) => {
    await FoodSchema.find().then((data) => {
        res.status(200).json({Data: data});
    }).catch(err => {
        res.status(400).json({message: err.message});
    })
});

module.exports = foodRouter;