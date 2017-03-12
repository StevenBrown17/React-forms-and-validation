import React, { Component } from 'react';
//import logo from './logo.svg';
import slinky from './slinky.gif';
import './App.css';
import Welcome from './Welcome.js';
import TileList from './TileList.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={slinky} className="slinky" alt="slinky" height="100" />
          <h2>Stevens React Application</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        HELLO WORLD

        <h1><Welcome name="Bob"/></h1>
        <p>
          <TileList list={this.props.media}/>
        </p>
      </div>
    );
  }
}
//<img src={logo} className="App-logo" alt="logo" />
export default App;
