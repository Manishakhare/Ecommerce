// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    // var token1= jwt.sign(accounts[request.headers.login].id, privateKey, {expiresIn: 60});
  
    // options for cookie
    const options = {
      // expiresIn: "60m",
      expiresIn: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    // const setToken = function (data) {
    //   return new Promise((resolve, reject) => {
    //     const token = jwt.sign( data , signkey, { expiresIn: "1d" });
    //     resolve(token);
    //   });
    // };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
      
    });
  };
  
  module.exports = sendToken;
  