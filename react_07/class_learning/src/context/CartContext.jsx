import {createContext} from "react"
import {useState} from "react"

export const CartContext = createContext();  // create empty box

const CartContextProvider = ({children}) => {
    const[cart, setCart] = useState(0);
    const handleChange = (inc) => {
        setCart(cart+inc)
    }
    return <CartContext.Provider value={ {cart, handleChange} }> {children} </CartContext.Provider>
}
// {children} :  it is just prop for <App/>
// Provider : provides the value
// Consumer : takes the value
export default CartContextProvider