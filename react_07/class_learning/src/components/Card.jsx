import "./card.css"
import { CartContext } from "../context/CartContext"
import {useContext} from "react"

function Card(){
    const {handleChange} = useContext(CartContext);

    return (
        <div className="card">
            <button onClick={() => {
                handleChange(1)
            }}>Add to Cart</button>
        </div>
    )
}
export default Card