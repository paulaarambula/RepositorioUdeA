const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Producto = require('./../models/producto-model');

const createProductoFromData = async (response, producto) => {
  if (!producto.id_producto) {
    return {
      ok: false,
      error: 'Falta id',
      status: 400,
    };
  }
  if (!producto.descripcion) {
    return {
      ok: false,
      error: 'Falta descripcion',
      status: 400,
    };
  }
  if (!producto.valor) {
    return {
      ok: false,
      error: 'Falta valor',
      status: 400,
    };
  }
  if (!producto.estado) {
    return {
      ok: false,
      error: 'Falta estado',
      status: 400,
    };
  }

  const existingProducto = await Producto.findOne({ id_producto: producto.id_producto });
  if (existingProducto && existingProducto._id) {
    return {
      ok: false,
      error: 'El producto ya está registrado',
      status: 302,
      producto: existingProducto,
    };
  }

  const newProducto = new Producto({
    ...producto,
  });
  newProducto.save((error, result) => {
    if (error) {
      return { error, status: 500 };
    }
    return result;
  });
};

// POST
const createProducto = async (request, response) => {
  const producto = request.body;
  try {
    const resultado = await createProductoFromData(response, producto);
    console.log(resultado.status)
    return response.status(resultado.status || 200).send(resultado);
  }catch(err){
    console.log(200);
    return response.send(200)
  }
};

// GET
const readProductos = (request, response) => {
  const id = request.params.id;

  const filter = {};
  if (id) {
    filter._id = id;
  }

  Producto.find(filter, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
};

const readProductoData = async (request, response) => {
  const producto = await Producto.findOne({ _id: request.productoId });
  if (producto) {
    return response.send(producto);
  }else{
    return response.send({status:200})
  }
  return response.status(404).send({ error: 'No existe el producto' });
};

module.exports = {
  createProducto,
  readProductos,
  readProductoData,
};