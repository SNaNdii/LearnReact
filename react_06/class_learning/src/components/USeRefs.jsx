import { useState, useRef, useEffect} from "react"

/* ----------- UseRef -------------
1. Store the value and dont+'t lose it when component is re-rendering
2. Change in this value should not cause re-rendering
 */

function UseRefs(){
    const[count, setCount] = useState(0);
    const ref = useRef(10); // {current}

    console.log("count is initially : ", ref)
    useEffect( () => {
        startCounter()
    }, [])
    
    const startCounter = () => {
        ref.current = setInterval( () => {
            setCount( (c) => {
                return c+1;
            })
        }, 500)
    }
    return (
        <div>
            <h2>Counter : {count} </h2>

            <button onClick={() => {
                setCount(count+1);
            }} >Change Counter</button>
            
            <button onClick={() => {
                ref.current += 1;  // It will store a reference in line no 10
                console.log("Value changed : ", ref)
            }} >Change Value</button>

            <button onClick={() => {
                clearInterval(ref.current);
            }}>Pause Counter</button>

            <button onClick={() => {
                startCounter();
            }}>Restart Counter</button>
        </div>
    )
}

export default UseRefs