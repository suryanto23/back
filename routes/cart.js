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

router.get("/:id" , async (req,res)=>{
    
    try {
        const cartData = await Cart.findById(req.params.id).populate("product" , "productName productPrice")
        res.json({
            message: "Display Cart Item by ID",
            data: cartData
        })
    } catch (e) {
        console.log(e);
        res.status(500).send(e)
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

router.delete("/:id" , async (req,res)=>{

    try {
        const cartID = await Cart.findById(req.params.id)
        const deletedItem = await Cart.deleteOne({_id:cartID})
        res.json({
            message: "Delete Item in Cart",
            data: deletedItem
        })
        
    } catch (e) {
        console.log(e)
        
    }
   
});


module.exports=router;