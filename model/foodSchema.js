const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    OrderId: {
        type: String,
        required: true
    },
    OrderName: {
        type: String,
        required: true
    },
    FoodName: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("FoodApp", FoodSchema);