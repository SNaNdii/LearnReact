import { ADD_COUNTER } from "./action";

export const reducer = (store , {type , payload}) => {
    switch(type){
        case ADD_COUNTER : return {...store , counter : store.counter + payload};
        default : return store;
    }
}