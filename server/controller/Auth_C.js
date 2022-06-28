
  
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require("../model/userModel");
const sendToken = require("../utils/jwtToken");
const admin_info = require("../model/Auth_M");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const ErrorHander = require("../utils/errorhander");


// Register a User
exports.registerUser = async (req, res, next) => {
    // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //   folder: "avatars",
    //   width: 150,
    //   crop: "scale",
    // });
  
    const { name, email, password } = req.body;


    const user = await User.create({
      name,
      email,
      password,
    
    });
  
    sendToken(user, 201, res);
  };
  



exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHander("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHander("Invalid email or password", 401));
    }



  
    // const token=user.getJWTToken()
    // res.json(token)


    // var token = jwt.sign(accounts[request.headers.login].id, privateKey, {expiresIn: 60});
    // res.json(user)
    sendToken(user, 200, res);
  });