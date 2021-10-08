import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistroProducto from "./RegistroProducto";
import './Producto.css';

export default function Producto() {
  return (
    <div>
      <Router>
        <button>
          <Link
            style={{ textDecoration: "none", color: "white"}}
            to="/registro-producto"
          >
            <b>Registrar Producto</b>
          </Link>
        </button>
        <Switch>
          <Route path="/registro-producto">
            <RegistroProducto />
          </Route>         
        </Switch>
      </Router>
    </div>
  );
}
