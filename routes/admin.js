const path = require('path')

const rootDir = require('../util/path')

const express = require('express')
const router = express.Router();

const productController = require('../controllers/product')

router.get('/add-product',productController.getAddProduct );

router.post('/add-product',productController.postAddProduct);


module.exports =router;
