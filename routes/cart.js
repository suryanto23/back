const express = require('express');
const router = express.Router();
const {Cart} = require('../models/indexModel');

router.get("/" , async (req,res)=>{

    try {
        
        const cartData = await Cart.find({}).populate("product" , "productName productPrice")
        res.json({
            message: "Display User Cart",
            data: cartData
        })
        
    } catch (e) {
        console.log(e)
        
    }

});

router.post("/" , async (req,res)=>{

    try {
        const item = req.body
        const cartData = await Cart.create({
            user: item.user,
            product: item.product,
        });
   
        res.json({
            message: "Add to Cart",
            data: cartData
        })
        
    } catch (e) {
        console.log(e)
        
    }

   
});


module.exports=router;