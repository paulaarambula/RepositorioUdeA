import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AppContext } from "../AppContext/AppContext";
import { useContext, useState } from "react";
import "./RegistrarVentas.css";

export default function RegistrarVenta(props) {
  const datos = useContext(AppContext);
  const [valorIdVenta, cambiarValorIdVenta] = useState("");
  const [valorVenta, cambiarValorVenta] = useState("");
  const [valorIdProducto, cambiarValorIdProducto] = useState("");
  const [valorUnitarioProducto, cambiarValorUnitarioProducto] = useState("");
  const [cantidadProducto, cambiarCantidadProducto] = useState("");
  const [fechaVenta, cambiarFechaVenta] = useState("");
  const [idCliente, cambiarIdCliente] = useState("");
  const [nombreCliente, cambiarNombreCliente] = useState("");
  const [idVendedor, cambiarIdVendedor] = useState("");
  const [nombreVendedor, cambiarNombreVendedor] = useState("");

  const buttonClick = () => {
    const newProduct = {
      idVenta: valorIdVenta,
      valorVenta: valorVenta,
      valorIdProducto: valorIdProducto,
      valorUnitario: valorUnitarioProducto,
      cantidadProducto: cantidadProducto,
      fechaVenta: fechaVenta,
      idCliente: idCliente,
      nombreCliente: nombreCliente,
      idVendedor: idVendedor,
      nombreVendedor: nombreVendedor,
      done: false,
    };
    datos.setProducts([...datos.products, newProduct]);
  };
  return (

          <form>
            <table>
              <caption>
                <b>Formulario de Registro de Ventas</b>
              </caption>
              <tbody>
                <tr>
                  <th colSpan="2">
                    <b>Ingrese la Información de la venta</b>
                  </th>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={"Numero de venta"}>
                      <h4>Numero de venta </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      type={"text"}
                      name={"numero de venta"}
                      placeholder={"Ingresar numero de venta "}
                      value= {valorIdVenta}
                      onChange ={(event)=>{
                        cambiarValorIdVenta(event.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={"Fecha de venta"}>
                      <h4>Fecha</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      type={"text"}
                      name={"Fecha de venta"}
                      placeholder={"Ingresar la fecha "}
                      value= {fechaVenta}
                      onChange ={(event)=>{
                        cambiarFechaVenta(event.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={"vendedor ID"}>
                      <h4>ID del vendedor </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      name={"vendedor ID"}
                      type={'text'}
                      placeholder={"Ingresar ID de vendedor"}
                      value= {idVendedor}
                      onChange ={(event)=>{
                        cambiarIdVendedor(event.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={"nombre vendedor"}>
                      <h4>Nombre del vendedor</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      type={"text"}
                      name={"nombre vendedor"}
                      placeholder="Escriba el nombre del vendedor"
                      value={nombreVendedor}
                      onChange={(event)=>{
                        cambiarNombreVendedor(event.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={"ID del cliente"}>
                      <h4>ID del cliente </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      type={'text'}
                      name={"ID del cliente"}
                      placeholder="Ingresar ID del cliente"
                      value={idCliente}
                      onChange={(event)=>{
                        cambiarIdCliente(event.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={"Nombre del cliente"}>
                      <h4>Nombre del cliente </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      type={'text'}
                      name={"nombre del cliente"}
                      placeholder="Ingresar nombre del cliente "
                      value={nombreCliente}
                      onChange={(event)=>{
                        cambiarNombreCliente(event.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={"ID producto"}>
                      <h4>ID producto</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      type={'text'}
                      name={"ID producto"}
                      placeholder={"Escriba ID del producto"}
                      value={valorIdProducto}
                      onChange={(event)=>{
                        cambiarValorIdProducto(event.target.value)
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={"cantidad de productos"}>
                      <h4>Cantidad </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      type={'text'}
                      name={"cantidad de productos"}
                      placeholder={"Ingresar cantidades"}
                      value={cantidadProducto}
                      onChange={(event)=>{
                        cambiarCantidadProducto(event.target.value)
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={"unit value"}>
                      <h4>Valor Unitario ($)</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      type={'text'}
                      name={"unit value"}
                      placeholder={"Ingresar valor unitario del producto"}
                      value={valorUnitarioProducto}
                      onChange={(event)=>{
                        cambiarValorUnitarioProducto(event.target.value)
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={"Total value"}>
                      <h4>Valor Total ($) </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      name={"Total value"}
                      placeholder={"Ingresar valor total de venta"}
                      value={valorVenta}
                      onChange={(event)=>{
                        cambiarValorVenta(event.target.value);
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className={"boton"} type={"button"} onClick={buttonClick}>
              Registrar Producto
            </button>
            <Link
              className={"volver"}
              style={{ textDecoration: "none", color: "white" }}
              to="/ventas"
            >
              <b>Volver</b>
            </Link>
          </form>

  );
};
RegistrarVenta.propTypes = {
  createVenta: PropTypes.func,
}