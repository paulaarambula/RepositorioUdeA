const mongoose = require('mongoose');
const { Schema } = mongoose;

const ventaSchema = new Schema({
  numero_venta: {
    type: String,
    required: true,
    unique: true,
  },
  id_vendedor: {
    type: String,
    required: true,
  },
  nombre_vendedor: {
    type: String,
    required: true,
  },
  id_cliente: {
    type: String,
    required: true,
  },
  nombre_cliente: {
    type: String,
    required: true,
  },
  id_producto: {
    type: String,
    required: true,
  },
  nombre_producto: {
    type: String,
    required: true,
  },
  cantidad: {
    type: String,
    required: true,
  },
  valor_unitario: {
    type: String,
    required: true,
  },
  valor_total: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    default: 'EN PROCESO',
    enum: ['EN PROCESO', 'CANCELADA', 'ENTREGADA'],
  }, 
});

module.exports = mongoose.model('ventas', ventaSchema);