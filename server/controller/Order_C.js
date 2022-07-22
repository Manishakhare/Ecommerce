

const Product_M = require("../model/Product_M");
const { errorHandler } = require('../helpers/dbErrorHandler');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const ApiFeatures = require("../utils/apifeatures");
const Order = require("../model/OrderModel");



// Create new Order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;
  
    const order = await Order.create({
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.user._id,
    });
  
    res.status(201).json({
      success: true,
      order,
    });
  });



  // get Single Order
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  


    const {_id} = req.body;
    console.log(_id);
  
    async function   getData(params) {
      var  pData = await Order.findOne({ _id: _id });
  
      if(pData){
        res.send([pData]);
      }else{
        res.send("not found");
  
      }}
    getData();
  });

  // get logged in user  Orders
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });
  
    res.status(200).json({
      success: true,
      orders,
    });
  });




  // get all Orders -- Admin
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find();
  
    let totalAmount = 0;
  
    orders.forEach((order) => {
      totalAmount += order.totalPrice;
    });
  
    res.status(200).json({
      success: true,
      totalAmount,
      orders,
    });
  });

 
 // update Order Status -- Admin
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.body);
  
    if (!order) {
      return next(new ErrorHander("Order not found with this Id", 404));
    }
  
    if (order.orderStatus === "Delivered") {
      return next(new ErrorHander("You have already delivered this order", 400));
    }
  
    if (req.body.status === "Shipped") {
      order.orderItems.forEach(async (o) => {
        await updateStock(o.product, o.quantity);
      });
    }
    order.orderStatus = req.body.status;
  
    if (req.body.status === "Delivered") {
      order.deliveredAt = Date.now();
    }
  
    await order.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
    });
  });



  // delete Order -- Admin
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.body);
  
    if (!order) {
      return next(new ErrorHander("Order not found with this Id", 404));
    }
  
    await order.remove();
  
    res.status(200).json({
      success: true,
    });
  });
  