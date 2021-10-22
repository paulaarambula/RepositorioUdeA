import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Ventas from "./Ventas";
import "./ListaVentas.css";


export default function ListaVentas() {
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
        <div id="container">
            <form id="form">
                <label className="element" for="search"> Buscar</label>
                <input className="element" type="text" name="search" id="search" />
                <input className="element" type="button" name="btnSearch" value=" " id="btnsearch" />
                <label className="element" for="field">Campo</label>
                
            </form>
        </div>    
        </section>
      </body>
    </div>
  );
};
