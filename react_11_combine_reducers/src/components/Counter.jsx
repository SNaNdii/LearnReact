import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../redux/counter/action";

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counter.counter)
    const counterHandleAdd = () => {
        dispatch(addCount(1));
    }

    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={counterHandleAdd}>Add Count</button>
            <hr/>
        </div>
    )
}