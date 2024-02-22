import { useState, useEffect } from "react"

function Counter(){
    const[count, setCount] = useState(0);

    useEffect( () => {
        const id = setInterval( () => {
            setCount( (c) => {
                console.log("Setting count state", c);
                if(c >= 20){
                    c=0;
                }
                return c+1;
            });
        }, 1000)


        return function (){
            console.log("Unmounted")
            clearInterval(id);
        }
    }, [])

    return (
        <div>
            <h4>Count : {count}</h4>
            
        </div>
    )
}

export default Counter