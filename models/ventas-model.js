const mongoose = require('mongoose');

const { Schema } = mongoose;

const ventaSchema = new Schema ({
    fechaVenta: {
        type: String,
        required: true,
        match: new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')
    },
    idVendedor: {
        type: String,
        required: true,
    },
    nombreVendedor: {
        type: String,
        required: true,
    },
    idCliente: {
        type: String,
        required: true,
    },
    nombreCliente: {
        type: String,
        required: true,
    },
    valorIdProducto: {
        type: String,
        required: true,
    },
    cantidadProducto: {
        type: String,
        required: true,
    },
    valorUnitario: {
        type: String,
        required: true,
    },
    valorVenta: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('ventas', ventaSchema);