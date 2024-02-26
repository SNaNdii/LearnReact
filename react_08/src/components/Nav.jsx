import { Link } from "react-router-dom"
function Nav(){
    const name = [
        {title: "Home", to: "/home"},
        {title: "About", to: "/about"}
    ]
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
        </div>
    )
}

export default Nav