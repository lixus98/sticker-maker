import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

//Pages
import Home from './Pages/Home';


class App extends Component {
  render() {
    return (
      <Router>
        <Route
        exact={true}
        path='/home'
        render={props => {
          return(
            <Home />
          )
        }}
        />

        
      </Router>
    )
  }
}

export default App;
