import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom"

export const PrivateComp = ({children}) => {
    const {auth} = useContext(AuthContext)

    if(!auth){
        return <Navigate to="/login"/>
    }
    return children;
}