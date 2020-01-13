const VisibilityReducer = (state=true,action) => {
    if (action.type==='VISIBILITY_BOX'){return state=!action.input}
    else return state
}
 
export default VisibilityReducer;