const express = require('express');
const router = express.Router();




var category = require('../controller/Category_C');





router.post('/CategoryInsert',category.CategoryInsert);

router.post('/getOnefood',category.getOnefood );
router.post('/show',category.show);
router.post('delete_category/',category.delete_category);
router.post('/update',category.update);


module.exports = router;