const express = require('express');
const router = express.Router();




var auth = require('../controller/Auth_C');







router.post('/registerUser',auth.registerUser );
router.post('/loginUser',auth.loginUser );
// router.post('/forgotPassword',auth.forgotPassword );
router.post('/logout',auth.logout );

// router.get('/show',auth.Show);

router.post('/password/forgot',auth.forgotPassword);

router.post('/password/reset/:token',auth.resetPassword);


module.exports = router;