import { useState, useEffect } from "react"

function Todo(){
    const[toDo, setTask] = useState([]);
    const[text, settext] = useState("");
    const[page, setPage] = useState(1);  // for pagination

    useEffect ( () => {
        getData();

        return function(){ // this is called CleanUp function
            console.log("toDo's is Unmounted") // this function will get called when function is removed from UI (example hide todo list) 
        }
    }, [page]) // passing page in array because of pagination. whenever page will chage, it will inform useEffect and getData will fetch data again accordingly
    
    async function getData(){
        try{
            const res = await fetch(`http://localhost:8080/list?_page=${page}&_limit=5`);
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

{/* ----------------Add Task----------------- */}
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

{/* --------------------Pagination------------------- */}
            <button 
                onClick={() => {
                    setPage(page-1);
                }}>Previous Page
            </button>

            <button 
                onClick={() => {
                    setPage(page+1);
                }}>Next Page
            </button>

        </div>
    )
}

export default Todo