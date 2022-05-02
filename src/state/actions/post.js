export const addPost = (payload) => (dispatch)=> {
    dispatch({type: "ADD_POST", payload:payload})
}