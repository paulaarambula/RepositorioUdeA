import PropTypes from "prop-types";

import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <div>
        <tr>
          <td>
            <h4>id</h4>
          </td>
          <td>
            <p>{props.id}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Descripción</h4>
          </td>
          <td>
            <p>{props.descripcion}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Valor Unitario</h4>
          </td>
          <td>
            <p>{props.valorUnitario}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Estado del Producto</h4>
          </td>
          <td>
            <p>{props.estadoProducto}</p>
          </td>
        </tr>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string,
  descripcion: PropTypes.string,
  valorUnitario: PropTypes.string,
  estadoProducto: PropTypes.string,
  done: PropTypes.bool,
};

export default Product;
