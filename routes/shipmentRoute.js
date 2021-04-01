const express = require('express');
const router = express.Router();
const {Shipment} = require('../models/indexModel');
 

router.get("/" , async (req,res)=>{

    try {
        const shipmentData = await Shipment.find({});
        res.json({
            message: "Display All Shipment",
            data: shipmentData
        })
    } catch (e) {
        console.log(e)
        
    }

});

router.post("/" , async (req,res)=>{

    try {
        const shipmentNew = await Shipment.create(req.body);
        res.json({
            message: "Adding new Shipment",
            data: shipmentNew
        })
    } catch (e) {
        console.log(e)
        
    }
  
});

module.exports=router;