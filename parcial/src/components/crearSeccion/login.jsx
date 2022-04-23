import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./login.module.css"
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className={style.boton} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
