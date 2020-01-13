const SetFilmReducer = (state=[],action)=> {
    if(action.type==='SET_BOX_FILM'){return ([...state,action.value])}
    
    else return state
}
 
export default SetFilmReducer;