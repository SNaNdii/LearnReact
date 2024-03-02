import { Button , Text} from '@chakra-ui/react'
import { store } from '../Redux/store'
import { addCount } from '../Redux/action';
import {useDispatch , useSelector} from 'react-redux'

export const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counter);

    return <div>
        <Text>Counter : {counter}</Text>
        <Button 
            onClick={() => {
                dispatch(addCount(1));
            }} colorScheme='blue'>Add 1
        </Button>
    </div>
}