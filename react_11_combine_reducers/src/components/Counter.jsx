import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../redux/counter/action";
import { useState } from "react";

export const Counter = () => {
    const counterDispatch = useDispatch();
    const counter = useSelector((store) => store.counter.counter)
    const counterHandleAdd = () => {
        counterDispatch(addCount(1));
    }

    const todosDispatch = useDispatch();
    const todos = useSelector((store => store.todos.todos))
    const [text , setText] = useState("");
    const todosHandleAdd = () => {
        todosDispatch(text);
    }

    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={counterHandleAdd}>Add Count</button>
            <hr/>

            <input onChange={(e) => {
                setText(e.target.value)
            }} placeholder="Enter Task Here"/>
            <button onClick={todosHandleAdd}> Add Task</button>
            {todos.map((e) => {
                return <li>{e.title}</li>
            })}
        </div>
    )
}