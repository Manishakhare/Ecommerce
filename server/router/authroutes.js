const express = require('express');
const router = express.Router();




var auth = require('../controller/Auth_C');







router.post('/registerUser',auth.registerUser );
router.post('/loginUser',auth.loginUser );
// router.get('/show',auth.Show);



module.exports = router;