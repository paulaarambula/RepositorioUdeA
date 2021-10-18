const mongoose = require('mongoose');

const { Schema } = mongoose;

const ventaSchema = new Schema ({
    fecha: {
        type: String,
        required: true,
        match: new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')
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
    cantidad_producto: {
        type: String,
        required: true,
    },
    valor_unitario_producto: {
        type: String,
        required: true,
    },
    valor_total: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('ventas', ventaSchema);