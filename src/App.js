import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SidebarPanel} from "./sidebar/SidebarPanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Taylors Site</h1>
        </header>
        <p className="App-intro">
          <SidebarPanel />
        </p>
      </div>
    );
  }
}

export default App;
