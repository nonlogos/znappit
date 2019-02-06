import React, { Component } from 'react';
import Logo from './Logo_req';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <p>please save i want lunch LUNCH!</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
