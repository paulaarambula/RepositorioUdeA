import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./Login.css";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <p>
        Es necesario iniciar sesión para acceder al sistema, para ello inicie
        sesión con Google.
      </p>
      <button onClick={() => loginWithRedirect()}>
        Iniciar sesión con Google
      </button>
    </div>
  );
};
export default Login;
