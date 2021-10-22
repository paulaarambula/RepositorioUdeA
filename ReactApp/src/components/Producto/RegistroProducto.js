import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Producto from "./Producto";
import "./RegistroProducto.css";

export default function RegistroProducto() {
  const [valorIdProducto, cambiarValorIdProducto] = useState('');
  const [descripcionProducto, cambiarDescripcionProducto] = useState('');
  const [valorUnitarioProducto, cambiarValorUnitarioProducto] = useState('');
 
  return (
    <div>
      <body>
        <Router>          
          <button className={"volver"}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/productos"
            >
              <b>Volver</b>
            </Link>
          </button>
          <Switch>
            <Route path="/productos">
              <Producto />
            </Route>
          </Switch>
        </Router>
        <section>
          <form>
            <table>
              <caption>
                <b>Formulario de Registro de Producto</b>
              </caption>
              <tbody>
                <tr>
                  <th colspan="2">
                    <b>Ingrese la Información del Producto</b>
                  </th>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={'product ID'}>
                      <h4>ID del Producto</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id={'product ID'}
                      type = { 'text' }
                      name={'product ID'}
                      placeholder={'Ingresar ID de usuario'}
                      required={'true'}
                      value={valorIdProducto}
                      onChange = {(event)=>{
                        cambiarValorIdProducto(event.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for={'description'}>
                      <h4>Descripción del Producto</h4>
                    </label>
                  </td>
                  <td>
                    <textarea
                      id={'description'}
                      type = { 'text' }
                      name={'description'}
                      placeholder={'Escriba la descripción del producto'}
                      required={'true'}
                      value={descripcionProducto}
                      onChange={(event)=>{
                        cambiarDescripcionProducto(event.target.value);
                      }}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td id={"col1"}>
                    <label for={'unit value'}>
                      <h4>Valor Unitario ($)</h4>
                    </label>
                  </td>
                  <td>
                    <input
                      id={'unit value'}
                      type = { 'text' }
                      name={'unit value'}
                      placeholder={"Ingresar valor unitario del producto"}
                      required={"true"}
                      value={valorUnitarioProducto}
                      onChange={(event)=>{
                        cambiarValorUnitarioProducto(event.target.value);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td id="col1">
                    <label for={'status'}>
                      <h4>Estado del Producto</h4>
                    </label>
                  </td>
                  <td>
                    <select id="status">
                      <option>...</option>
                      <option>Disponible</option>
                      <option>No disponible</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td id="registro" colspan="2">
                    <input
                      id="boton"
                      type="submit"
                      value="Registrar el Producto"
                    />
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
