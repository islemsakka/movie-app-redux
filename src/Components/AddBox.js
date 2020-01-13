import { connect } from 'react-redux';
import React from 'react';


const AddBox = (props) => {

    console.log(props)


    return (<div className='bigbox'>
          
        <div className='film'>
            {console.log(props.tab)}
            {console.log(props.searchName)}
            {console.log(props.Conteur)}
            {console.log(props.tab.map(e => (e.name.match(props.searchName))))}
            {console.log(props.SetCompteuraction(props.StateStar))}
            {props.tab.filter(e=> (e.name.match(props.searchName)) && e.rate >= (props.StateStar.map(e => e.conteur).reduce((c, v) => c + v))).map((e,i) =>
                <div key={i}className='exemple'>
                    <img className='img' src={e.link} alt='pic' />
                    <div >
                        <i style={{ color: e.rate >= 1 ? 'black' : 'grey' }} className="fas fa-star"></i>
                        <i style={{ color: e.rate >= 2 ? 'black' : 'grey' }} className="fas fa-star"></i>
                        <i style={{ color: e.rate >= 3 ? 'black' : 'grey' }} className="fas fa-star"></i>
                        <i style={{ color: e.rate >= 4 ? 'black' : 'grey' }} className="fas fa-star"></i>
                        <i style={{ color: e.rate === 5 ? 'black' : 'grey' }} className="fas fa-star"></i>
                    </div>
                    <span>{e.name}</span>
                    <div className='Buton'>
                        <div><button onClick={()=>{props.history.push('/Description')
                         setTimeout(() => {
                            props.SetDescaction(e.id)
                        }, 20);
                    }} >Description</button></div>
                        <button onClick={() => props.SuppAction(e.id)}>Supprimer</button>
                        <button onClick={() => props.EditAction(e.id, prompt('give me the new title'), prompt('give me the new rate'), prompt('give me the new Link'))}>Edit</button></div>
                </div>)}
            <div className='addbox' onClick={() => props.Visibility(props.visibility)}>+</div></div>
            {<div style={{ display: (props.visibility) ? 'none' : 'inline' }} className='modal'>
            <input type='text' placeholder='title' onChange={(event) => props.SetName(event.target.value)} />
            <input type='text' placeholder='rate:0-5' onChange={(event) => props.SetRate(event.target.value)} />
            <input type='text' placeholder='film' onChange={(event) => props.SetLink(event.target.value)} />
            <button onClick={() => {
                props.SetTabaction(props.name, props.rate, props.link,prompt('donner une description du film'))
                setTimeout(() => {
                    props.Visibility(props.visibility)
                }, 20);
            }}>Add</button></div>}

    </div>);
}
//style={{ display: props.show ? 'none' : 'inline' }}
const mapDispatchToProps = (dispatch) => {
    return {
        SetName: (input) => dispatch({ type: 'SET_NAME', payload: input }),
        SetRate: (input) => dispatch({ type: 'SET_RATE', payload: input }),
        SetLink: (input) => dispatch({ type: 'SET_LINK', payload: input }),
        SetCompteuraction: (input) => dispatch({ type: 'SET_COMPTEUR', payload: input }),
        SetTabaction: (in_name, in_rate, in_link, bo) => dispatch({ type: 'SET_TAB', payload: { id: Math.random(), name: in_name, rate: in_rate, link: in_link, description: bo } }),
        SuppAction: (input) => dispatch({ type: 'SUPP_BOX', value: input }),
        EditAction: (d, a, b, c) => dispatch({ type: 'EDIT_BOX', payload: { id: d, name: a, rate: b, link: c } }),
        Visibility: (input) => dispatch({ type: 'VISIBILITY_BOX', input: input }),
        SetDescaction: (a) => dispatch({ type: 'SET_DESC', payload:a}),
        



    }
}
const mapStateToProps = (state) => {
    return {
        StateStar: state.Star,
        Conteur: state.Conteur,
        name: state.Name,
        rate: state.Rate,
        link: state.Link,
        tab: state.tab,
        Box: state.Box,
        searchName: state.SearchName,
        visibility: state.Visibility,
        SetDesc:state.SetDesc,


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBox);