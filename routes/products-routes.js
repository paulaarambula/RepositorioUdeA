const express = require('express');
const { createProduct, readProduct, updateProduct, deleteProduct } = require('../controllers/product-controller');


const router = express.Router();

router.post('/create-product', createProduct);

router.get('/read-product', readProduct);

router.get('/read-product/:id', readProduct);

router.patch('/update-product/:id', updateProduct);

router.delete('/delete/:id', deleteProduct);

module.exports = router;