import {ToDoInput} from './TodoInput';
import { useState } from 'react'
import './todo.css'

function ToDo(){
    const [task, setTask] = useState([]);
    const taskHandler = (todo)=>{
        console.log("received", todo);
        setTask([...task, todo]);
    }
    return (
        <div>
            <ToDoInput taskHandler = {taskHandler}/>
            <h2 className='task main' > Here is your updated task</h2>
            <div className='task'>
                    {task.map((e) => {
                        return (
                            <div className='row'>
                                <li>{e}</li>
                                <button>Remove</button>
                                <p>In Process</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default ToDo