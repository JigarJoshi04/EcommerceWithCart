const router = require("express").Router();

const Product = require("../models/product");




router.get("/",async (req,res)=>{
    console.log("Inside HOME API")
    try{
       const product = await Product.find();
       //console.log("Jigar")
      //  console.log(product)
       res.setHeader('Content-Type','image/png'); 
    //    res.send(product[0].image.data);
    // var s = [];
    // s = product.map(p => p['image']['data']);
    
    // console.log(s);
    // console.log(product)
    res.send(product);


    }
    catch(err)
    {
        console.log(err);
    }
   })

   
module.exports = router;