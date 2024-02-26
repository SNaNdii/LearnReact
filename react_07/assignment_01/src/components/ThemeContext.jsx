import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const[theme, setTheme] = useState("dark")

    const handleChange = (col) => {
        setTheme(col)
    }

    return <ThemeContextProvider value={ {theme, handleChange} }>{children}</ThemeContextProvider>
}