export const ADD_COUNTER = "ADD_COUNTER";

export const addCount = (data) => {
    return {
        type : ADD_COUNTER,
        payload : data
    }
}