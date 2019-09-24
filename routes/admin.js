const path = require('path')

const rootDir = require('../util/path')

const express = require('express')
const router = express.Router();

const productController = require('../controllers/product')

router.use('/add-product',productController.getAddProduct );

router.use('/product',productController.postAddProduct);


module.exports =router;
