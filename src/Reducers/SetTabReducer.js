


const SetTabReducer = (state = [{ id: Math.random(), name: 'avenger', rate: 4, link: 'https://media.senscritique.com/media/000018476719/325/Avengers_Endgame.jpg',Description :"ISLEM" }, { id: Math.random(), name: 'annihilation', rate: 3, link: 'https://media.senscritique.com/media/000017617001/325/Annihilation.jpg' ,Description :"sakka"}], action) => {

    if (action.type === 'SET_TAB') { return [...state, { id: action.payload.id, name: action.payload.name, rate: action.payload.rate, link: action.payload.link,Description:action.payload.description }] }
    else if (action.type === 'SUPP_BOX') { return state.filter(e => e.id !== action.value) }
    else if (action.type === 'EDIT_BOX') { return state.map(e => { if (e.id=== action.payload.id) { e.name = action.payload.name; e.rate = action.payload.rate; e.link = action.payload.link; return e} else return e}) 
}

    else return state
}


export default SetTabReducer;