const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Venta = require('./../models/venta-model');

const createVentaFromData = async (response, venta) => {
  if (!venta.numero_venta) {
    return {
      ok: false,
      error: 'Falta numero venta',
      status: 400,
    };
  }
  if (!venta.id_vendedor) {
    return {
      ok: false,
      error: 'Falta id vendedor',
      status: 400,
    };
  }
  if (!venta.nombre_vendedor) {
    return {
      ok: false,
      error: 'Falta nombre vendedor',
      status: 400,
    };
  }
  if (!venta.id_cliente) {
    return {
      ok: false,
      error: 'Falta id cliente',
      status: 400,
    };
  }
  if (!venta.nombre_cliente) {
    return {
      ok: false,
      error: 'Falta nombre cliente',
      status: 400,
    };
  }
  if (!venta.id_producto) {
    return {
      ok: false,
      error: 'Falta id producto',
      status: 400,
    };
  }
  if (!venta.nombre_producto) {
    return {
      ok: false,
      error: 'Falta nombre producto',
      status: 400,
    };
  }
  if (!venta.cantidad) {
    return {
      ok: false,
      error: 'Falta cantidad',
      status: 400,
    };
  }
  if (!venta.valor_unitario) {
    return {
      ok: false,
      error: 'Falta valor unitario',
      status: 400,
    };
  }
  if (!venta.valor_total) {
    return {
      ok: false,
      error: 'Falta valor total',
      status: 400,
    };
  }
  if (!venta.estado) {
    return {
      ok: false,
      error: 'Falta estado',
      status: 400,
    };
  }

  const existingVenta = await Venta.findOne({ numero_venta: venta.numero_venta });
  if (existingVenta && existingVenta._id) {
    return {
      ok: false,
      error: 'La venta ya está registrado',
      status: 302,
      venta: existingVenta,
    };
  }

  const newVenta = new Venta({
    ...venta,
  });
  newVenta.save((error, result) => {
    if (error) {
      return { error, status: 500 };
    }
    return result;
  });
};

// POST
const createVenta = async (request, response) => {
  const venta = request.body;
  try {
    const resultado = await createVentaFromData(response, venta);
    console.log(resultado.status)
    return response.status(resultado.status || 200).send(resultado);
  }catch(err){
    console.log(200);
    return response.send(200)
  }
  
};

// GET
const readVentas = (request, response) => {
  const id = request.params.id;

  const filter = {};
  if (id) {
    filter._id = id;
  }

  Venta.find(filter, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
};

const readVentaData = async (request, response) => {
  const venta = await Venta.findOne({ _id: request.ventaId });
  if (producto) {
    return response.send(venta);
  }
  return response.status(404).send({ error: 'No existe la venta' });
};

module.exports = {
  createVenta,
  readVentas,
  readVentaData,
};