import React from 'react';
import './App.css';
import Header from'./Components/Header.js';
import AddBox from './Components/AddBox';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Description from './Components/Description';


function App() {
  return (<div>
<Router>
  <Route exact path='/'  component={Header}/>
  <Route exact path='/'  component={AddBox}/>
  <Route path='/Description/'component={Description}/>
</Router>   
  
    </div>
  );
}

export default App;
