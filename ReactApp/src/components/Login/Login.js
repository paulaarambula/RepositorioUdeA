import React from "react";
import LogoGoogle from "../Img/logo-google.jpg"
import { useAuth0 } from "@auth0/auth0-react";

import "./Login.css";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h3>Bienvenido a Sky Running</h3>
      <p>
        Es necesario iniciar sesión para acceder al sistema, para ello inicie
        sesión con Google.
      </p>
      <button onClick={() => loginWithRedirect()}>
      <img src={LogoGoogle} width="30px" /> 
         Iniciar sesión con Google
      </button>
    </div>
  );
};
export default Login;
