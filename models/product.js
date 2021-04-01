const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName:{
        type: String,
        require: true,    
    },
    productPrice:{
        type: Number,
        require: true    
    },
    description: String
});

const Product = mongoose.model("product" , productSchema);
module.exports = Product;