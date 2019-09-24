const fs = require('fs');
const rootDir = require('../util/path')
const path = require('path')
console.log(rootDir);
const p = path.join(rootDir,'data','product.json');

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };
  


module.exports = class Product{

    constructor(t){
        this.title =t;

    }
    save(){
    // products.push(this)
    getProductsFromFile(product =>{
        product.push(this)
        fs.writeFile(p,JSON.stringify(product),(err)=>{
         console.log('error');
        });
    })
      
   
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }

}