const express = require('express');
const {
  createVenta,
  readVentas,
  readVentaData,
} = require('./../controllers/venta-controller');

// Router
const router = express.Router();

router.post('/venta', createVenta);

router.get('/venta', readVentas);

router.get('/ventadata', readVentaData);

router.get('venta/:id', readVentas);


module.exports = router;