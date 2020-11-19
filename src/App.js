import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Bret from './components/Bret';



export default class App extends Component {

render() {
    return (

      <Router>
        <Home />
        <Bret />

        <Switch> 
          <Route path="/users/:itemId" component={Bret}/>
        </Switch>
      </Router>
    )
  }
  }
  





 



