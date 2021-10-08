import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Inicio from "../Inicio/Inicio";

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};
export default Logout;