export const up = (payload) => (dispatch) => {
    dispatch({type: "UP", payload: payload})
}