const express = require('express');
const router = express.Router();
// const isAuthenticatedUser=require('../middleware/auth');



var product_C = require('../controller/Product_C');

const { isAuthenticatedUser ,authorizeRoles} = require("../middleware/auth");



router.post('/productInsert', isAuthenticatedUser, authorizeRoles("admin"),product_C.createProduct);

// router.post('/Search',auth.Search );
router.post('/product_show',product_C.product_show);
router.post('/getoneproduct',product_C.getoneproduct);
router.post('/product_delete', isAuthenticatedUser, authorizeRoles("admin"),product_C.product_delete);
router.post('/updateProduct', isAuthenticatedUser, authorizeRoles("admin"),product_C.updateProduct);


module.exports = router;