const SetStarReducers = (state=[{id:1, couleur: false,conteur:0 },{ id: 2, couleur: false,conteur:0},{ id: 3, couleur: false,conteur:0  },{ id: 4, couleur: false,conteur:0  },{ id: 5, couleur: false,conteur:0 }],action) => {

    // if (action.type==='SET_STAR'){
    //     let i=0;
    //     while(i<5){state=[...state,action.value];
    //     i++}
    //     return (state)  
    // }
   
 if (action.type==='SET_COLOR'){
        return state.map(e=>{if(e.id===action.payload.id){e.couleur=!e.couleur;
            (e.couleur&&e.conteur<5)?e.conteur++:e.conteur--; 
            return e}else {return e}} )
    }
    else return state
    
}

 
export default  SetStarReducers;