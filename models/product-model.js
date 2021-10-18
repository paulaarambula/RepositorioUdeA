const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    product: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    valor: {
        type: String,
        required: true,
    },
    estado_producto: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('productos', productSchema);