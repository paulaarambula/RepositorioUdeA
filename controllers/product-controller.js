const Producto = require('./../models/product-model')

const productos =[];

const createProduct = (request, response) =>{
    const producto = request.body;
    
    if (!producto.descripcion) {
        return response.status(400).send({ ok: false, error :"falta descripción" });        
      }
      if (!producto.valorUnitario) {
        return response.status(400).send({ ok: false, error :"falta valor" });
      }
      if (!producto.estadoProducto) {
        return response.status(400).send({ ok: false, error :"falta estado" });
      }
    console.log(producto);
    const newProduct = new Producto(producto);
    newProduct.save((error, result)=>{
        if(error){
            return response.status(500).send({error})
        }
        return response.send(result)
    });  
}

const readProduct = (request, response) =>{
    const id = request.params.id;
    
    const filter = {};
    if(id){
        filter._id = id;
    }
    Producto.find(filter, (error, result)=>{
        if(error){
            return response.status(500).send({error})
        }
        return response.send(result)
    })   
}

const updateProduct = (request, response) =>{
    const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hay id para modificar'})
    }

    //primer parametro es el filtro del elemento que se va a modificar
    //segundo parametro son los nuevos datos que se van a poner 
    //tercer parametro es la funcion que va a entregar el error y el resultado 
    Producto.updateOne({ _id: id }, request.body, (error, result)=>{
        if(error){
            return response.status(500).send({error})
        }
        Producto.find({ _id: id }, (error, result)=>{
            if(error){
                return response.status(500).send({error});
            }
            return response.send(result);
        })        
    })
}

const deleteProduct = (request, response) =>{
    const id = request.params.id;
    if(!id){
        return response.status(400).send({error: 'No hay id para eliminar'})
    }
    Producto.remove( { _id: id }, (error, result) =>{
        if(error){
            return response.status(500).send({error});
        }
        return response.send(result);
    })
}

module.exports = {
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct,
}