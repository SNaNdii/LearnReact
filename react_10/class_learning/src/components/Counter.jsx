import { Button , Text} from '@chakra-ui/react'
import { store } from '../Redux/store'
import { addCount } from '../Redux/action';
import {useDispatch} from 'react-redux'

export const Counter = () => {
    const dispatch = useDispatch();
    console.log("State : ", store.getState());
    return <div>
        <Text>Counter : {store.getState().Counter}</Text>
        <Button 
            onClick={() => {
                dispatch(addCount(1));
            }} colorScheme='blue'>Add 1
        </Button>

    </div>
}