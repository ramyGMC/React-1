import React, { Component } from 'react';
import Box from './box';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome To React</h1>
      </header>
      <p className="App-intro">
      To get Started, edit <code>src/App.js</code> and save to realod0
      </p>
      {/*<Box name = "aaa" des = "aaaa" /> */}
      {/*<Box name = "bbb" des = "lorem" />*/}


      </div>
    );
  }
}

export default App;
