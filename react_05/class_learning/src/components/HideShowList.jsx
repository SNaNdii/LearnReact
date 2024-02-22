import Todo from "./Todo"
import {useState} from "react"

function HideShowList(){

    const[show, setShow] = useState(true);

    return (
        <div>
            {/* Functionality - Hide and show all the list of todos */}
            <button 
                onClick={() => {
                    setShow(!show);
                }}>
                {show ? "Hide " : "Show "}
                ToDo List
            </button>

            {show ? <Todo/> : null}
        </div>
    )
}
export default HideShowList