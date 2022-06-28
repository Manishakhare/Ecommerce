const express = require('express');
const router = express.Router();




var product_C = require('../controller/Product_C');





router.post('/productInsert',product_C.productInsert);

// router.post('/Search',auth.Search );
// router.get('/show',auth.Show);



module.exports = router;