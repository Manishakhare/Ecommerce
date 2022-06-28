// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const express = require('express');
const app = express();
// const DB = 'mongodb+srv://doadmin:O0W2T6As4iD3q197@dbaas-db-8278685-62a696e7.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=dbaas-db-8278685&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
// mongoose.connect(DB, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//    useFindAndMosify:false 
// }).then(() => {
//     console.log('connection successful');
// }).catch((err) => console.log('not connected'));

// middleware
const middleware = (req, res, next)=> {
    console.log(' my middleware');
    // next();
}
// middleware();
// dotenv.config({ path:'./config.env'});
// require('./db/conn');
// app.use(require('./router/auth'));
// const PORT = process.env.PORT;
app.get('/',(req,res) => {
    res.send('Hello world from server');
});
app.get('/about',middleware,(req,res) => {
    res.send('Hello about world from server');
});
app.get('/contact',middleware,(req,res) => {
    res.send('Hello contact world from server');
});
app.get('/help',middleware,(req,res) => {
    res.send('Hello help world from server');
});
// app.listen(5000, () => {
// console.log('this is running in port number 5000');
// })

app.listen(process.env.PORT||5000, function (err){if(err) {console.log('err');}
else{ console.log('subscribe to my channel');}
    
});