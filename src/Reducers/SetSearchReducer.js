const SetSearchReducer = (state='',action) => {
    if (action.type==='SET_SEARCH'){
        return state=action.payload
    }
    else return state
}
 
export default SetSearchReducer;