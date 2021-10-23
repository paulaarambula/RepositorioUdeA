import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrarVenta from "./RegistrarVenta";
import ListaVentas from "./ListaVentas";

export default function RegistroProducto() {
  return (
    <div>
      <Router>
      <button>
          <Link
            style={{ textDecoration: "none", color: "white"}}
            to="/registro-venta"
          >
            <b>Registrar Venta</b>
          </Link>
        </button>
        <button>
          <Link
            style={{ textDecoration: "none", color: "white"}}
            to="/lista-ventas"
          >
            <b>Ver ventas</b>
          </Link>
        </button>
        <Switch>
            <Route path="/registro-venta">
                <RegistrarVenta />
            </Route>
            <Route path="/lista-venta">
                <ListaVentas />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}
