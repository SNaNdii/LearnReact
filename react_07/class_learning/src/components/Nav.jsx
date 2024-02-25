import "./Nav.css"
import { CartContext } from "../context/CartContext"
import {useContext} from "react"

function Nav(){
    const {cart} = useContext(CartContext); // useContext is Consumer and it returns everything
    return (
        <>
        <div className="nav">
            <div>
                <h2>LogoBakery</h2>
            </div>
            <div className="nav2">
                <p>Service</p>
                <p>Projects</p>
                <p>About</p>
                <p>Cart : {cart}</p>
            </div>
            <button> Contact </button>
        </div>
        </>
    )
}
export default Nav