import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import  Logout  from "../Login/Logout";
import Profile from "../Perfil/Perfil"
import Login from "../Login/Login";

export default function Inicio() {
  const { isAuthenticated } = useAuth0();

    return (
        <div className="App">
          
          <h3>Bienvenido a Sky Running</h3>
          {isAuthenticated ? (
          <>
            <Profile />
            <Logout />
          </>
        ) : (
          
          <Login />
        )}
          
        </div>
      );
}
