const express = require('express');
const { createVenta, readVenta, updateVenta } = require('../controllers/ventas-controller');

const router = express.Router();

router.post('/create-venta', createVenta);

router.get('/read-venta', readVenta);

router.get('/read-venta/:id', readVenta);

router.patch('/update-venta/:id', updateVenta);

module.exports = router;