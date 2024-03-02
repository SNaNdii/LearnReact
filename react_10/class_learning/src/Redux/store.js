import {legacy_createStore as createStore} from 'redux'
import { counterReducer } from './reducer'


export const store = createStore(counterReducer , {counter : 0})

store.subscribe(()=> {  // subscribe will call your function automatically whenever it get clicked
    console.log("subscribe : ", store.getState())
})