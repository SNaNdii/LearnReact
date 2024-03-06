import {combineReducers, legacy_createStore as createStore} from 'redux'
import { counterReducer } from './counter/reducer';
import { todoReducer } from './todos/reducer';

const rootReducer = combineReducers({
    counter : counterReducer,
    todos : todoReducer
})

export const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// {counter : 0}