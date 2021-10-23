import React from 'react';
import PropTypes from "prop-types";

const Venta = (props) => {
    return (
        <div className='sale'>
            <div>
        <tr>
          <td>
            <h4>Número de venta</h4>
          </td>
          <td>
            <p>{props.idVenta}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Id Vendedor</h4>
          </td>
          <td>
            <p>{props.idVendedor}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Nombre del Vendedor</h4>
          </td>
          <td>
            <p>{props.nombreVendedor}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Documento del Identidad del Cliente</h4>
          </td>
          <td>
            <p>{props.idCliente}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>id del Producto</h4>
          </td>
          <td>
            <p>{props.valorIdProducto}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Cantidad</h4>
          </td>
          <td>
            <p>{props.cantidadProducto}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Valor Unitario</h4>
          </td>
          <td>
            <p>{props.valorUnitarioProducto}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Valor Total</h4>
          </td>
          <td>
            <p>{props.valorVenta}</p>
          </td>
        </tr>
      </div>
            
        </div>
    )
};
Venta.propTypes ={
    idVenta: PropTypes.string,
    valorVenta: PropTypes.string,
    valorIdProducto: PropTypes.string,
    valorUnitarioProducto: PropTypes.string,
    cantidadProducto: PropTypes.string,
    fechaVenta: PropTypes.string,
    idCliente: PropTypes.string,
    nombreCliente: PropTypes.string,
    idVendedor: PropTypes.string,
    nombreVendedor: PropTypes.string,
}

export default Venta
