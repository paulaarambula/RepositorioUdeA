import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Ventas from "./Ventas";
import "./RegistrarVentas.css";

export default function RegistrarVenta() {
  return (
    <div>
      <body>
        <Router>
          <button className="volver">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/ventas"
            >
              <b>Volver</b>
            </Link>
          </button>
          <Switch>
            <Route path="/ventas">
              <Ventas />
            </Route>
          </Switch>
        </Router>
        <section>
          <form>
            <table>
              <caption>
                <b>Formulario de Registro de Ventas</b>
              </caption>
              <tbody>
                <tr>
                  <th colspan="2">
                    <b>Ingrese la Información de ventas </b>
                  </th>
                </tr>
                <tr>
                  <td id="col1">
                    <label for={"Numero de venta"}>
                      <h4>Numero de venta </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id={"numero de venta"}
                      type={'text'}
                      name={"numero de venta"}
                      placeholder={"Ingresar numero de venta "}
                      required={"true"}
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for="vendedor ID">
                      <h4>ID del vendedor </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id="vendedor ID"
                      name="vendedor ID"
                      placeholder="Ingresar ID de vendedor "
                      required="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for="nombre vendedor">
                      <h4>Nombre del vendedor</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id="nombre vendedor"
                      name="nombre vendedor"
                      placeholder="Escriba el nombre del vendedor"
                      required="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for="ID del cliente">
                      <h4>ID del cliente </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id="ID del cliente"
                      name="ID del cliente"
                      placeholder="Ingresar ID del cliente"
                      required="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for="Nombre del cliente">
                      <h4>Nombre del cliente </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id="Nombre del cliente"
                      name="nombre del cliente"
                      placeholder="Ingresar nombre del cliente "
                      required="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for="ID producto">
                      <h4>ID producto</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id="ID producto"
                      name="ID producto"
                      placeholder="Escriba ID del producto"
                      required="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for="Nombre del producto">
                      <h4>Nombre del producto </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id="Nombre del producto"
                      name="Nombre del producto"
                      placeholder="Ingresar nombre del producto "
                      required="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for="cantidad de productos">
                      <h4>Cantidad </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id="cantidad de productos"
                      name="cantidad de productos"
                      placeholder="Ingresar cantidades"
                      required="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for="unit value">
                      <h4>Valor Unitario ($)</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id="unit value"
                      name="unit value"
                      placeholder="Ingresar valor unitario del producto"
                      required="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for="Total value">
                      <h4>Valor Total ($) </h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id="Total value"
                      name="Total value"
                      placeholder="Ingresar valor total de venta "
                      required="true"
                    />
                  </td>
                </tr>                
                <tr>
                  <td id="registro" colspan="2">
                    <input id="boton" type="submit" value="Registrar ventas" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </section>
      </body>
    </div>
  );
}
