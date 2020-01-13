import React from 'react';
import { connect } from 'react-redux'
const Header = (props) => {
    return (<div>
        <input placeholder='search' onChange={(e)=>{props.SetSearch(e.target.value)
       }}/>
        <div >
            <i style={{ color: (props.StateStar[0].couleur) ? 'black' : 'grey' }} onClick={() => { props.SetColor(1,props.StateStar[0].couleur) }} className="fas fa-star "></i>
            <i style={{ color: (props.StateStar[1].couleur) ? 'black' : 'grey' }} onClick={() => { props.SetColor(2,props.StateStar[0].couleur) }} className="fas fa-star"></i>
            <i style={{ color: (props.StateStar[2].couleur) ? 'black' : 'grey' }} onClick={() => { props.SetColor(3,props.StateStar[0].couleur) }} className="fas fa-star"></i>
            <i style={{ color: (props.StateStar[3].couleur) ? 'black' : 'grey' }} onClick={() => { props.SetColor(4,props.StateStar[0].couleur) }} className="fas fa-star"></i>
            <i style={{ color: (props.StateStar[4].couleur) ? 'black' : 'grey' }} onClick={() => { props.SetColor(5,props.StateStar[0].couleur) }} className="fas fa-star"></i>
            {/* {console.log(props.StateStar.map(e=>(e.conteur)).reduce((c,v)=>c+v))} */}
        </div>
    </div>  );
}
const mapDispatchToProps = (dispatch) => {
    return {
        SetColor: (input,bo) => dispatch({ type: 'SET_COLOR',payload:{id:input,bo:bo}}),
        
        SetSearch:(input)=>dispatch({type:'SET_SEARCH',payload:input}),
    }
}
const mapStateToProps = (state) => {
    return {
        StateStar: state.Star,
        //Conteur:state.Conteur,
        searchName:state.SearchName,
        tab: state.tab,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);