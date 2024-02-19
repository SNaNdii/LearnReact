import { useState } from 'react'
import './ToDoInput.css'
export const ToDoInput = ( {taskHandler} ) => {
    const [text, setText] = useState("");

    return (
        <div className='box'>
            <input type="text" 
                onChange={(e) => {
                    setText(e.target.value)
                }}/>
            <button 
                onClick={()=>{
                    taskHandler(text);
                }}>Save Task</button>
        </div>
    )
    
}

export default ToDoInput