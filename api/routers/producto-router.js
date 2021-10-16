const express = require('express');
const {
  createProducto,
  readProductos,
  readProductoData,
} = require('./../controllers/producto-controller');

// Router
const router = express.Router();

router.post('/producto', createProducto);

router.get('/producto', readProductos);

router.get('/productodata', readProductoData);

router.get('producto/:id', readProductos);


module.exports = router;