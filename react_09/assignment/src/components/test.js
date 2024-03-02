import {legacy_createStore as createStore} from 'redux'

//Action Types
const ADD_COUNT = "ADD_COUNT";
const TOGGLE_THEME = "TOGGLE_THEME";
const TODO = "TODO";

//Action creators
const addTodo = (title) => {
    return {
        type : "TODO",
        payload : {
            title: title,
            status: false
        }
    }
}
// How to update store
export const Reducer = (store , action) => {
    switch(action.type){
        case ADD_COUNT : return {...store , counter: store.counter + action.payload};
        case TOGGLE_THEME : return {...store , theme: store.theme == "light" ? "dark" : "light"};
        case TODO : return {...store , list: [...store.list, action.payload]};
        default : return store;
    }
}
const initState =  {
    counter: 0,
    theme : "light",
    list : []
}
export const Store = createStore(Reducer, initState);
console.log("Initial Stage = ", Store.getState())  //Initial State of store

Store.dispatch(addTodo("Learn Data Structures"));
Store.dispatch(addTodo("Learn React"));
Store.dispatch(addTodo("Learn Node.js"));

console.log("After Dispatch = ", Store.getState())  //Updated State of store