import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../redux/action";

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counter)

    const handleAdd = () => {
        dispatch(addCount(1));
    }
    
    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={handleAdd}>Add Count</button>
        </div>
    )
}