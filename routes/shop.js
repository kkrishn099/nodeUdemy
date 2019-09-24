const express = require('express');
const path = require('path')
const rootDir = require('../util/path')
//const adminData = require('./admin')
const router = express.Router();

const productController = require('../controllers/product')

router.get('/',productController.getProduct);
module.exports = router;