const mongoose = require('mongoose');
const { Schema } = mongoose;

const productoSchema = new Schema({
  id_producto: {
    type: String,
    required: true,
    unique: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  valor: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    default: 'NO DISPONIBLE',
    enum: ['DISPONIBLE', 'NO DISPONIBLE'],
  },
});

module.exports = mongoose.model('productos', productoSchema);