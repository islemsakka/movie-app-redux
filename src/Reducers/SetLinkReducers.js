const SetLinkReducers = (state='',action) => {
    if(action.type==='SET_LINK'){return state=action.payload
    }
    else return state
}
 
export default SetLinkReducers;