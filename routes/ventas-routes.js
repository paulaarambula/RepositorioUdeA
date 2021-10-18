const express = require('express');
const { createVenta, readVenta } = require('../controllers/ventas-controller');

const router = express.Router();

router.post('/create-venta', createVenta);

router.get('/read-venta', readVenta);

router.get('/read-venta/:id', readVenta);

module.exports = router;