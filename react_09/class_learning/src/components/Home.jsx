import { Link } from "react-router-dom"

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Link to="/description">Welcome to my home page</Link>
        </div>
    )
}

export default Home