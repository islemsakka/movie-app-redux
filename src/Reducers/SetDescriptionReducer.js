const SetDescription = (state={arr:[],id:0},action) => {
    if (action.type==='SET_DESC'){
        return action.payload
    }
    else return state
}
 
export default SetDescription;