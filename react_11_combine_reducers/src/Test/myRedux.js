//action type
const ADD_COUNT = "ADD_COUNT";

//initial stage
const init = {
    counter: 0
}

//action create
const incCount = {type: ADD_COUNT , payload: 1};

//reducer
const reducer = (store, {type , payload}) => {
    switch(type){
        case ADD_COUNT : return {counter: store.counter + payload};
        default : return store;
    }
}

// store implementation
class Store{
    constructor(reducer , init){
        this.reducer = reducer;
        this.store = init;
    }
    getState(){
        return this.store;
    }
    dispatch(action){
        this.store = this.reducer(this.store , action)
    }
}

const store = new Store(reducer , init);

console.log(store.getState());
store.dispatch(incCount);

console.log(store.getState());
store.dispatch(incCount);

console.log(store.getState());
store.dispatch(incCount);