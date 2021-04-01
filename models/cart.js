const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    orderID:{
        type: Number,
        require: true    
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"   
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"  
    },
    quantity: Number,
    shipment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "shipment"  
    }

});

const Cart = mongoose.model("cart" , cartSchema);
module.exports = Cart;