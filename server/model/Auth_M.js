// const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Auth_M = new mongoose.Schema({

    name: {
        type: String,
        require:["please fill the name"]
    },
  email:
  { type:String,
    require:["please fill the email"]
  },
  password:
  {
      type:String,
      require:["please fill the  password"]
  },
  token:
  {
      type:String
  }
 
 
 
  
 
  
});


const admin_info= mongoose.model(' login_info', Auth_M);
module.exports = admin_info ;