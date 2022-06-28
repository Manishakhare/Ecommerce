

const User = require("../model/Auth_M");
// const { errorHandler } = require('../helpers/dbErrorHandler');
// // const bcrypt = require("bcryptjs");

// // exports.Insert = (req, res)=> {


// //     // res.send("hii");
 
// //     const { name, email, password } = req.body;

// //     // // Check required fields
// //     // if (!name || !email || !password) {
// //     //   return res.status(400).json({ msg: "Please enter all fields" });
// //     // }
// //     // //Check password length
// //     // if (password.length < 6) {
// //     //   return res.status(400).json({ msg: "Password should be atleast 6 characters long" });
// //     // }


// //     // User.findOne({ email: email }).then((user) => {
// //     //     if (user) return res.status(400).json({ msg: "User already exists" });
    
// //     //     //New User created
// //     //     const newUser = new User({
// //     //       name,
// //     //       email,
// //     //       password
// //     //     });
    
// //     //     //Password hashing
// //     //     bcrypt.genSalt(12, (err, salt) =>
// //     //       bcrypt.hash(newUser.password, salt, (err, hash) => {
// //     //         if (err) throw err;
    
// //     //         newUser.password = hash;
// //     //         // Save user
// //     //         newUser
// //     //           .save()
// //     //           .then(
// //     //             res.json({
// //     //               msg: "Successfully Registered"
// //     //             })
// //     //           )
// //     //           .catch((err) => console.log(err));
// //     //       })
// //     //     );
// //     //   });

    
  
// // }
// exports.Insert = (req, res) => {
//     // console.log('req.body', req.body);
//     const user = new User(req.body);
//     user.save((err, user) => {
//       if (err) {
//         return res.status(400).json({
//           err: errorHandler(err),
//         });
//       }
//       user.salt = undefined;
//       user.hashed_password = undefined;
//       res.json({
//         user,
//       });
//     });
//   };











  
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
// const admin_info = require("../model/Admin_model");

const admin_info = require("../model/Auth_M");
// const item_info = require("../model/item_model");

exports.Signup = (req, res)=> {


    const { name, email, password} = req.body
    admin_info.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new admin_info({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

//     const {name,email,password} =req.body;

// let jwtSecretKey = process.env.JWT_SECRET_KEY;
// let data = {
//     email: email,
//     password: password,
// }

// const token = jwt.sign(data, jwtSecretKey);
//  console.log(token) 

//      admin_info.findOne({email:email},(err,user)=>{
//      if(user){
//          res.send({message:"user already exist"})
//      }else {
//          const user = new admin_info({name,email,password,token})
//          user.save(err=>{
//              if(err){
//                  res.send(err)
//              }else{
//                  res.send({message:"sucessfull",token:token})
//              }
//          })
//      }
 //})

    
  
}
exports.signin = (req, res)=> 
{
    const {email,password} =req.body;
    admin_info.findone({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
}
