const express = require('express');
const connectDB = require('./config/db');




const dotenv = require('dotenv');
const app = express();
var path = require('path');
var bodyParser = require('body-parser')
dotenv.config({ path: './.env' });
var cors = require('cors');
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use((req,res, next)=>{

 
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers',"*");
    res.header('Access-Control-Allow-Credentials', true);
    next();
 });

// Connect Database
connectDB();


app.get('/', (req, res) => res.send('Hello world!'));
app.use('/admin', require('./router/authroutes'));
app.use('/admin', require('./router/Categoryroutes'));

app.use('/admin', require('./router/Productroutes'));
app.use('/admin', require('./router/Orderroutes'));

// Middleware for Errors
app.use(errorMiddleware);
const port = process.env.PORT || 5000;

 const server=app.listen(port, () => console.log(`Server running on port ${port}`));



process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});