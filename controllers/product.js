const Product = require('../models/product')

exports.getAddProduct= (req ,res,next)=>{
    console.log("This is middleware");
   // res.sendFile(path.join(rootDir,'views','add-product.html'))
   res.render("add-product",{pageTitle :'Add-Product', path:'/add-product',
   formsCSS:true,
   productCSS:true,
   activeAddProduct:true

});
}

exports.postAddProduct=(req,res,next)=>{
    // console.log(req.body);
    //products.push({title: req.body.title}); 
    const product   = new Product(req.body.title);
    product.save();

     res.redirect('/');
 }

 exports.getProduct=(req ,res,next)=>{
    console.log("This is another middleware");
    //console.log('shop.js',adminData.product);
  //  res.sendFile(path.join(rootDir,'views','shop.html'))
  const product = Product.fetchAll((products)=>{
   res.render("shop",{prods:product ,pageTitle:"shop" ,
   path:'/' ,hasProducts:product.length > 0,
   productCSS: true,
   activeShop: true
   
 }
   
    ); // inject value to the views
  });
 
 

}



