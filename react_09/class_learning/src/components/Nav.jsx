import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
function Nav(){
    const {auth} = useContext(AuthContext)
    // const name = [
    //     {title: "Home", to: "/"},
    //     {title: "About", to: "/about"}
    // ]

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/description">Description</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login">{auth?"Logout":"Login"}</Link>
        </div>
    )
}

export default Nav