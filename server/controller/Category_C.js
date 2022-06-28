

const Category = require("../model/Category_M");
const { errorHandler } = require('../helpers/dbErrorHandler');


exports.CategoryInsert = (req, res)=> {

    const category = new Category(req.body);
    category.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json({ data });
    });

  }


  exports.show = (req, res) => {
    Category.find((error, data) => {
      if (error) {
        res.json({Category:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  };
 


  exports.getOnefood = function(req,res){

    const {_id} = req.body;
    console.log(_id);
  
    async function   getData(params) {
      var  pData = await Category.findOne({ _id: _id });
  
      if(pData){
        res.send([pData]);
      }else{
        res.send("not found");
  
      }}
    getData();
  };



  // exports.delete_category = function(req,res){
   
   
  //   const { _id } = req.body;
  //   Category.deleteOne({_id: _id}).then(
  //     () => {
  //       res.status(200).json({
  //         msg: 'success'
  //       });
  //     }
  //   ).catch(
  //     (error) => {
  //       res.status(200).json({
  //         msg: 'failure'
  //       });
  //     }
  //   );
    
    
    
   // }

    exports.delete_category = (req, res) => {
      const Category = req.Category;
      Category.remove((err, data) => {
        if (err) {
          return res.status(400).json({
            // error: errorHandler(err),
          });
        }
        res.json({
          message: 'Category deleted',
        });
      });
    };


    exports.update = (req, res) => {
      // console.log('req.body', req.body);
      // console.log('category update param', req.params.categoryId);
      const Category= req.Category;
      Category.name = req.body.name;
      Category.save((err, data) => {
        if (err) {
          return res.status(400).json({
            // error: errorHandler(err),
          });
        }
        res.json(data);
      });
    };