export const ADD_COUNTER = "ADD_COUNTER";

export const addCount = () => {
    return {
        type : ADD_COUNTER,
        payload : 1
    }
}