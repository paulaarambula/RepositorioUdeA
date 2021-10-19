const Venta = require("./../models/ventas-model");

const ventas = [];

const createVenta = (request, response) => {
  const venta = request.body;

  /* if (!venta.numero_venta) {
        return response.status(400).send({ ok: false, error :"falta numero de la venta" });        
      }*/
  if (!venta.fecha) {
    return response.status(400).send({ ok: false, error: "falta la fecha" });
  }
  if (!venta.id_vendedor) {
    return response
      .status(400)
      .send({ ok: false, error: "falta id del vendedor" });
  }
  if (!venta.nombre_vendedor) {
    return response
      .status(400)
      .send({ ok: false, error: "falta el nombre del vendedor" });
  }
  if (!venta.id_cliente) {
    return response
      .status(400)
      .send({ ok: false, error: "falta id del cliente" });
  }
  if (!venta.nombre_cliente) {
    return response
      .status(400)
      .send({ ok: false, error: "falta el nombre del cliente" });
  }
  if (!venta.id_producto) {
    return response
      .status(400)
      .send({ ok: false, error: "falta id del producto" });
  }
  if (!venta.nombre_producto) {
    return response
      .status(400)
      .send({ ok: false, error: "falta el nombre del producto" });
  }
  if (!venta.cantidad_producto) {
    return response
      .status(400)
      .send({ ok: false, error: "falta la cantidad del producto" });
  }
  if (!venta.valor_unitario_producto) {
    return response
      .status(400)
      .send({ ok: false, error: "falta el valor unitario del producto" });
  }
  if (!venta.valor_total) {
    return response
      .status(400)
      .send({ ok: false, error: "falta el valor total" });
  }
  console.log(venta);
  const newVenta = new Venta(venta);
  newVenta.save((error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
};

const readVenta = (request, response) => {
  const id = request.params.id;

  const filter = {};
  if(id){
    filter._id = id;
}
Venta.find(filter, (error, result)=>{
    if(error){
        return response.status(500).send({error})
    }
    return response.send(result)
})   
};

const updateVenta = (request, response) => {
  const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hay id para modificar'})
    }
  
    Venta.updateOne({ _id: id }, request.body, (error, result)=>{
        if(error){
            return response.status(500).send({error})
        }
        Venta.find({ _id: id }, (error, result)=>{
            if(error){
                return response.status(500).send({error})
            }
            return response.send(result)
        })        
    })
};

const deleteVenta = (request, response) => {
  const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hay id para eliminar'})
    }
    Venta.remove( { _id: id }, (error, result) =>{
        if(error){
            return response.status(500).send({error});
        }
        return response.send(result);
    })
};

module.exports = {
  createVenta,
  readVenta,
  updateVenta,
  deleteVenta,
};
