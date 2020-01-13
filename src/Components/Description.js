import React from 'react';
import {connect} from "react-redux"


const Description = (props) => {  
   console.log (props.tab.map(el=>(el.id===props.match.params.id)))
return (props.tab.filter(el=>(el.id===props.SetDesc)).map(el=><p>{el.Description}</p>)
    );
}


const mapStateToProps=(state)=> {
    return {
        tab: state.tab,
        SetDesc:state.SetDesc,
    }
}
 
export default connect(mapStateToProps,null)(Description);