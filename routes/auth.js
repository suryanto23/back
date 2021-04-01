const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { JWT_KEY } = require('../config/indexConfig');

const { User } =  require('../models/indexModel');

// user = username,email,password,address
// product = nama,harga,deskripsi
// cart = user,product,quantity,shipment
// shipment = ekspedisi,tarif,estimasi

router.post ("/register" , async (req,res)=>{

    try {
        const userData = req.body
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        // Handling for Fail Hashing
        if (!hashedPassword) throw new Error ("Terjadi Kesalahan, Error Hash Password");
            const userNew = await User.create({
            name: userData.name,
            password: hashedPassword 
        });

        res.json({
            message: "Register Succses",
            data: userNew
        });
    } catch (e) {
        console.log(e)
    }

});


router.post ("/login" , async (req,res)=>{

    try {
        const { name , password } = req.body;
        let userData = await User.findOne({name});
        if (userData && bcrypt.compareSync(password,userData.password)){
            userData = userData.toObject()
            const {password, ...rest} = userData
            // Create token
            const token = jwt.sign(rest , JWT_KEY)
            res.json({
                message: "Login Succses",
                token
            })
        } else {
            res.json({
                message: "Login Failed"
            })
        };
    } catch (e) {
        console.log(e)
    }
   
});

module.exports = router;

