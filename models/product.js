const fs = require('fs');
const rootDir = require('../util/path')
const path = require('path')
console.log(rootDir);




module.exports = class Product{

    constructor(t){
        this.title =t;

    }
    save(){
    // products.push(this)
    let products =[];
    const p = path.join(rootDir,'data','product.json');
     fs.readFile(p,(err,fileContent)=>{
        let products =[];
         if(!err){
             products = JSON.parse(fileContent);
         }
         products.push(this)
           fs.writeFile(p,JSON.stringify(products),(err)=>{
           
           });
     })
    }

    static fetchAll(cb){
        const p = path.join(rootDir,'data','product.json');
        fs.readFile(p,( err,fileContent=>{

            if(err){
                cb([]);
            }
            cb (JSON.parse(fileContent));

        }
        
        ))
    }

}