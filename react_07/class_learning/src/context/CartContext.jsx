import {createContext} from "react"

const CartContext = createContext();  // create empty box

const CartContextProvider = ({children}) => {
    return <CartContext.Provider value={0}> {children} </CartContext.Provider>
}
// {children} :  it is just prop for <App/>
// Provider : provides the value
// Consumer : takes the value
export default CartContextProvider