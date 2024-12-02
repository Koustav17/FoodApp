const express = require("express");
var foodRouter = express.Router();
const FoodSchema = require('../model/foodSchema');

foodRouter.post('/createOrder', async (req, res) => {
    var RandomString = Math.floor(Math.random() * 100) + 1;
    var FinalString = 'HGFD' + RandomString.toString() + 'JHI';
    let payload = {
        OrderId: FinalString,
        OrderName: req.body.OrderName,
        FoodName: req.body.FoodName
    }
    if(req.body.OrderName.length < 3) {
        return res.status(400).json({message: 'OrderName Should Not be Less than 3'});
    }
    if(req.body.FoodName.length < 3) {
        return res.status(400).json({message: 'FoodName Should Not be Less than 3'});
    }
    await FoodSchema.create(payload).then((data) => {
        if (data) {
            res.status(201).json({ message: "Order Created" });
        }
    }).catch(err => {
        res.status(400).json({ message: err.message });
    })
});

foodRouter.get('/getOrder', async (req, res) => {
    await FoodSchema.find().then((data) => {
        res.status(200).json({ Data: data });
    }).catch(err => {
        res.status(400).json({ message: err.message });
    })
});

foodRouter.post('/deleteOrder/:id', async (req, res) => {
    await FoodSchema.findByIdAndDelete({ _id: req.params.id }).then((data) => {
        if (data) {
            res.status(200).json({ message: "Order Deleted" });
        } else {
            res.status(400).json({ message: "Invalid Order No" });
        }
    }).catch(err => {
        res.status(400).json({ message: err.message });
    })
});

foodRouter.post('/updateOrder/:id', async (req, res) => {
    let payload = {
        OrderName: req.body.OrderName,
        FoodName: req.body.FoodName
    }
    if(req.body.OrderName.length < 3) {
        return res.status(400).json({message: 'OrderName Should Not be Less than 3'});
    }
    if(req.body.FoodName.length < 3) {
        return res.status(400).json({message: 'FoodName Should Not be Less than 3'});
    }
    await FoodSchema.findByIdAndUpdate({ _id: req.params.id }, payload).then((data) => {
        if (data) {
            res.status(200).json({ message: "Order Updated" });
        } else {
            res.status(400).json({ message: "Invalid Order No" });
        }
    }).catch(err => {
        res.status(400).json({ message: err.message });
    })
});


module.exports = foodRouter;