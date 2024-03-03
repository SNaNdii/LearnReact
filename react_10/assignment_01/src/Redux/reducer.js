import {ADD_TASK} from './action'

export const reducer = (store , {type , payload}) => {
    switch (type){
        case ADD_TASK : return {...store , task : [...store.task , payload]}
        default : return store;
    }
}