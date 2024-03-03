export const ADD_TASK = "ADD_TASK";

export const addTask = (data) => {
    return {
        type : ADD_TASK,
        payload : data
    }
}