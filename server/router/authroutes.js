const express = require('express');
const router = express.Router();




var auth = require('../controller/Auth_C');





router.post('/Signup',auth.Signup);
router.post('/signin',auth.signin);

// router.post('/Search',auth.Search );
// router.get('/show',auth.Show);



module.exports = router;