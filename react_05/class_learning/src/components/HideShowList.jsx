import Todo from "./Todo"
import {useState} from "react"

/* Functionality - Hide and show all the list of todos */

function HideShowList(){

    const[show, setShow] = useState(true);

    return (
        <div>
            
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