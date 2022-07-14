

const Product_M = require("../model/Product_M");
const { errorHandler } = require('../helpers/dbErrorHandler');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const ApiFeatures = require("../utils/apifeatures");
// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  // let images = [];

  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // const imagesLinks = [];

  // for (let i = 0; i < images.length; i++) {
  //   const result = await cloudinary.v2.uploader.upload(images[i], {
  //     folder: "products",
  //   });

  //   imagesLinks.push({
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   });
  // }

  // req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const product = await Product_M.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

  // exports.product_show = (req, res) => {
  //   Product_M.find((error, data) => {
  //     if (error) {
  //       res.json({Product_M:error})
  //     } else {
  //       res.json(data)
  //     }
  //   }).sort({_id:-1})
  // };
 


  exports.getoneproduct = function(req,res){

    const {_id} = req.body;
    console.log(_id);
  
    async function   getData(params) {
      var  pData = await Product_M.findOne({ _id: _id });
  
      if(pData){
        res.send([pData]);
      }else{
        res.send("not found");
  
      }}
    getData();
  };
/////////////////////////////
// Get All Product
exports.product_show = catchAsyncErrors(async (req, res, next) => {

  const resultPerPage = 10;
  const productsCount = await Product_M.countDocuments();

  const apiFeature = new ApiFeatures(Product_M.find(),req.query)
    .search()
    .filter().pagination(resultPerPage);

  let products = await apiFeature.query;

  let filteredProductsCount = products.length;

  // apiFeature.pagination(resultPerPage);



  res.status(200).json({
    success: true,
    products,
    productsCount,
    filteredProductsCount
   
    
  });
});

// Get All Product (Admin)
// exports.product_show = catchAsyncErrors(async (req, res, next) => {
//   const products = await Product_M.find();

//   res.status(200).json({
//     success: true,
//     products,
//   });
// });








  ///////////////////////////////////////////

  // Delete Product

exports.product_delete = catchAsyncErrors(async (req, res, next) => {
  const product = await Product_M.findById(req.body);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  // for (let i = 0; i < product.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  // }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});

 

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product_M.findById(req.body);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Images Start Here
  // let images = [];

  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // if (images !== undefined) {
  //   // Deleting Images From Cloudinary
  //   for (let i = 0; i < product.images.length; i++) {
  //     await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  //   }

  //   const imagesLinks = [];

  //   for (let i = 0; i < images.length; i++) {
  //     const result = await cloudinary.v2.uploader.upload(images[i], {
  //       folder: "products",
  //     });

  //     imagesLinks.push({
  //       public_id: result.public_id,
  //       url: result.secure_url,
  //     });
  //   }

  //   req.body.images = imagesLinks;
  // }

  product = await Product_M.findByIdAndUpdate( req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});



    