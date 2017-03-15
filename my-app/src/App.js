import React, { Component } from 'react';
//import logo from './logo.svg';
import slinky from './slinky.gif';
import './App.css';
//import Welcome from './Welcome.js';
//import TileList from './TileList.js';
import FormView from './FormView';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={slinky} className="slinky" alt="slinky" height="100" />
          <h2>Stevens React Application</h2>
        </div>
        <FormView/>
      </div>
    );
  }
}

//{this.props.children}

export default App;
