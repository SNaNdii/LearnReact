import {useEffect, useState } from "react"

const TodoInput = () =>{
    const[toDo, setTask] = useState([]);
    const[text, settext] = useState("");

    useEffect ( () => {
        getData();
    }, [])
    
    async function getData(){
        try{
            const res = await fetch("http://localhost:8080/list");
            const data = await res.json();
            setTask(data);
        }
        catch(err){
            console.log(err)
        }
    }
    
    return (
        <div>
            <input 
                onChange={(e) => settext(e.target.value)}
                type="text"
                placeholder="Enter your task here" 
            />

            <button 
                onClick={() => {
                    const payload = {
                        task : text,
                        status : false,
                    };
                    fetch("http://localhost:8080/list", {
                        method: "POST",
                        headers : {
                            "content-type" : "application/json",
                        },
                        body : JSON.stringify(payload),
                    }).then (() => {
                        getData();
                    });
                }} >Add
            </button>
            
            {console.log(toDo)}
            {toDo.map(({id, task}) => {
                return <h4>Id is : {id} , Task is : {task} </h4>
            })}
        </div>
    )
}

export default TodoInput
