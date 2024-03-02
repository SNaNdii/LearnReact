/*
Declarative Code
Pure functions :-
    1) always accept and always return
    2) no mutation
    3) no global states
    4) calling same function again , should always give same result . This is called Idempotency

-----------------Redux------------------------
=> Single sourxe of truth
=> Init , Get , Update

-----------------Difference between Context API and Redux------------------------
=> Context is not a state maagement
=> Redux is state management


-----------------Major points in Redux------------------------
1) Actions , 2) Dispatch , 3) Store , 4) view

  Actions
============
    => Always object : {type : 'something' , payload : 'something'}
    => Example : Add count 1 : {type : 'ADD_COUNT' , payload : 1}
                 Change Theme : {type : 'TOGGLE_THEME'}         // payload is optional
                 Login true : {type : 'LOGIN' , payload : true}
                 Dec count 1 : {type : 'DEC_COUNTER' , payload :}

  Dispatch
============
    => Function, which is returning something

  Store
============
    => State of entire app
    => {counter: 0 , theme: "light" , isLoggedIn: true , cartItems: [] , userLists: []}

  Reducers
=============
    => Function, which have some logic to change or set the state
    => In flux diagram, this function is not mentioned because this logic we hae to create by ourselves
    => always recieve entire state , action
    => always return a new update state
    => PURE
*/
const reducer = () => {
    if(action.type === "ADD_COUNT"){
        return {...store , counter: store.counter + action.payload};
    }

    if(action.type === "TOGGLE_THEME"){
        return {...store , theme: store.theme == "light" ? "dark" : "light"};
    }
}