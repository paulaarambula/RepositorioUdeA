import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../Img/logsinfondo.png";
import "./App.css";
import Inicio from "../Inicio/Inicio";
//import RegistroProducto from "../Producto/Producto"
import Producto from "../Producto/Producto";

function App() {  
  return (
    <div className="App">
      <Router>
        <div>
        <header className="App-header">
            <img className="App-logo" src={Logo} />
            <h1 className="title">SKY RUNNING</h1>
        </header>
          <nav className="App-nav">
            <Link style={{textDecoration: 'none', color: 'white' }} to="/inicio"><b>| Inicio |</b></Link>            
            <Link style={{textDecoration: 'none', color: 'white' }} to="/productos"><b> Productos |</b></Link>
            <Link style={{textDecoration: 'none', color: 'white' }} to="/registro-ventas"><b> Ventas |</b></Link>
          </nav>
        </div>
        <Switch>        
          
          <Route path="/inicio">
            <Inicio />                  
          </Route>
          <Route path="/productos">
            <Producto />                  
          </Route>
        </Switch>        
      </Router>     
    </div>
  );
}

export default App;
