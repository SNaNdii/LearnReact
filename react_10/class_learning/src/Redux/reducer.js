//---------REDUCER---------
import { ADD_COUNT } from "./action"

// Store should be => {counter : 0}
export const counterReducer = (store , {type , payload}) => {
    switch(type){
        case ADD_COUNT : return {...store , counter: store.counter + payload};
        default : return store;
    }
}