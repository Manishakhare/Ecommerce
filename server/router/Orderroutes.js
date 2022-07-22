const express = require('express');
const router = express.Router();
// const isAuthenticatedUser=require('../middleware/auth');



var Order_C = require('../controller/Order_C');

const { isAuthenticatedUser ,authorizeRoles} = require("../middleware/auth");



router.post('/CreateOrder',isAuthenticatedUser,Order_C.newOrder);
router.post("/GetSingleorder",isAuthenticatedUser,Order_C.getSingleOrder);
router.post('/OrderList',isAuthenticatedUser,Order_C.myOrders );
router.post("/admin/getAllOrders",isAuthenticatedUser, authorizeRoles("admin"),Order_C.getAllOrders);
// router.post('/getoneproduct',product_C.getoneproduct);
router.post('/deleteOrder', isAuthenticatedUser, authorizeRoles("admin"),Order_C.deleteOrder);
router.post('/updateOrder', isAuthenticatedUser, authorizeRoles("admin"),Order_C.updateOrder);


module.exports = router;