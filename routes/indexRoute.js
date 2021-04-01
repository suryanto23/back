const express = require('express');
const router = express.Router();

const userRouter = require('./auth')
const productRouter = require('./productRoute')
const shipmentRouter = require('./shipmentRoute.js')

//Auth
router.use("/auth",userRouter);

router.use("/product",productRouter);
router.use("/shipment",shipmentRouter);


module.exports = router