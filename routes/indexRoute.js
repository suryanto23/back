const express = require('express');
const router = express.Router();

const userRouter = require('./auth')
const productRouter = require('./productRoute')
const shipmentRouter = require('./shipmentRoute.js')
const cartRouter = require('./cart')

router.use("/auth",userRouter);
router.use("/product",productRouter);
router.use("/shipment",shipmentRouter);
router.use("/cart",cartRouter);


module.exports = router