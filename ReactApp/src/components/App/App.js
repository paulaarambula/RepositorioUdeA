import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../Img/logsinfondo.png";
import "./App.css";
import Inicio from "../Inicio/Inicio";
//import RegistroProducto from "../Producto/Producto"


function App() {  
  return (
    <div className="App">
      <Router>
        <div>
        <header className="App-header">
            <img className="App-logo" src={Logo} alt={"logo"}/>
            <h1 className="title">SKY RUNNING</h1>
        </header>
          <nav className="App-nav">
            <Link style={{textDecoration: 'none', color: 'white' }} to="/"><b>| Inicio |</b></Link> 
          </nav>
        </div>
        <Switch>        
          
          <Route path="/">
            <Inicio />                  
          </Route>
        </Switch>        
      </Router>     
    </div>
  );
}

export default App;
