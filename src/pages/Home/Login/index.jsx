import { Link } from "react-router-dom"
import useUser from "../../../hooks/useUser"
import { useEffect } from "react";

export const Login = () => {
    const {user, login} = useUser();
    useEffect(()=>{login()},[login])
  return (
    <>
    <div>Login</div>
    <br />
    <h1>Bienvenido, {user}</h1>
    <Link to="/">Volver atras</Link>
    <br />

    </>
    
  )
}
