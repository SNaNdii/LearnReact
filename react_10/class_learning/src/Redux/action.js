//---------Action type---------
export const ADD_COUNT = "ADD_COUNT";

//---------Action Creator---------
export const addCount = (data) => {
    return {
        type : ADD_COUNT,
        payload : data
    }
}