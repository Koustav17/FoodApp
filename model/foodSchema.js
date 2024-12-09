const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

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
    File: {
        type: String
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

// const FileUpload = new mongoose.Schema({
//     file: {
//         type: Types.ObjectId,
//         ref: 'FoodApp'
//     }
// })

module.exports = mongoose.model("FoodApp", FoodSchema);
// module.exports = mongoose.model("FileApp", FileUpload);
