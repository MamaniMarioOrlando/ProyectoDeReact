import { createContext, useState } from 'react'
import {PropTypes} from 'prop-types'
import { loginAuthService, profileUserService } from '../services/auth.service';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)    
    const [alert, setAlert] = useState(null)
    const [userProfie, setUserProfie] = useState(null);


    const handletAlert = (error) =>{
        setAlert(error.message);
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }

    const login = async (info) => {
        try {
            const{token}  = await loginAuthService(info)
            sessionStorage.setItem("DrinksToken",token)
            const decodeToken = token ? jwtDecode(token) : null;

            setUser(decodeToken.user) 

        } catch (error) {
            handletAlert(error)
        }
    }

    const logout = () => {
        setUser(null)
    }

    const getProfile = async() =>{

        try {
            const token = sessionStorage.getItem("DrinksToken");
            
            if(!token){
                return null 
            }
            const response = await profileUserService(token) 

            setUserProfie(response.data.user)
            
        } catch (error) {
            handletAlert(error)
        }
    }

    const contexValue = {
        user,
        userProfie,
        login,
        logout,
        alert,
        getProfile
    }
  return (
    <AuthContext.Provider value={contexValue}>
        {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
    children : PropTypes.node.isRequired,
}
export{
    AuthProvider,
    AuthContext
}