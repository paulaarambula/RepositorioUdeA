const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
    },
    valorUnitario: {
        type: String,
        required: true,
    },
    estadoProducto: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('productos', productSchema);