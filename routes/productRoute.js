const express = require('express');
const router = express.Router();
const {Product} = require('../models/indexModel');
 

router.get("/" , async (req,res)=>{


    try {
        
        const productData = await Product.find({});
        res.json({
            message: "Display All Product",
            data: productData
        })
        
    } catch (e) {
        console.log(e)
        
    }


});

router.post("/" , async (req,res)=>{

    try {
        const productNew = await Product.create(req.body);
   
        res.json({
            message: "Adding Item to Product",
            data: productNew
        })
        
    } catch (e) {
        console.log(e)
        
    }

   
});


module.exports=router;