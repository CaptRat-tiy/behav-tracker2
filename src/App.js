import React, { Component } from 'react';
import headerGif from './images/headerGifs/fingerman.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={headerGif} className="App-logo" alt="logo" />
          <h2>Behavior Tracker ReDo</h2>
        </div>
        <p className="App-intro">
          To get started...?  Done get started!  Get excellent now!
        </p>
      </div>
    );
  }
}

export default App;
