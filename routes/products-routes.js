const express = require('express');
const { createProduct, readProduct } = require('../controllers/product-controller');


const router = express.Router();

router.post('/create-product', createProduct);

router.get('/read-product', readProduct);

router.get('/read-product/:id', readProduct);

module.exports = router;