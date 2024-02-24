import Button from "./Button.jsx";
import {useState} from "react"

function Home(){

    const[theme, setTheme] = useState("dark");

    return (
        <div>
            <Button theme = {theme} onClick={() => alert("Counter Paused")}>Pause</Button>
            <Button theme = {theme} onClick={() => alert("Counter Start")}>Start</Button>
            <Button theme = {theme} onClick={() => alert("Counter Reset")}>Reset</Button>
            <Button theme = {theme} onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>Theme is : {theme}</Button>
        </div>
    )
}
export default Home