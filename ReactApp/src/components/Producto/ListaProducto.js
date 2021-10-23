import React, { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { Link } from "react-router-dom";
import Product from "./Product";

const ListaProducto = (props) => {
  const datos = useContext(AppContext);
  return (
    <div>
      {(datos.products || []).map((item, index) => {
        return (
          <Product
            key={index}
            id={item.id}
            descripcion={item.descripcion}
            valorUnitario={item.valorUnitario}
            estadoProducto={item.estadoProducto}
            done={item.done}
          />
        );
      })}
      <br />
      <Link to={"/registro-producto"}>Registrar Producto</Link>
    </div>
  );
};

export default ListaProducto;
