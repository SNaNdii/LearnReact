import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todos/action";

export const Todo = () => {

    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todos.todos)
    const [text , setText] = useState("");
    const todosHandleAdd = () => {
        dispatch(
            addTodo({
                title : text,
                status : false
            })
        );
    }

    return (
        <div>
            <input onChange={(e) => { setText(e.target.value) }} placeholder="Enter Task Here"/>
            <button onClick={todosHandleAdd}> Add Task</button>
            {todos.map((e, i) => {
                return <li key={i}>{e.title}</li>
            })}
        </div>
    )
}