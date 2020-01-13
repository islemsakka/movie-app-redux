const SetRateReducer = (state='',action) => {
    if(action.type==='SET_RATE'){return state=action.payload
    }
    else {return state}
}
 
export default SetRateReducer;