const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipmentSchema = new Schema({
    expedition:{
        type: String,
        require: true,    
    },
    fare:{
        type: Number,
        require: true    
    },
    estimate: String
});

const Shipment = mongoose.model("shipment" , shipmentSchema);
module.exports = Shipment;