import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from './components/Grid';
import Nav from './components/Nav';
import Jumbotron from "./components/Jumbotron";
import NoMatch from './pages/NoMatch';
import Books from './pages/Books';
import Saved from './pages/Saved';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Books />
        <Saved />
        <NoMatch /> 
        
      </div>
    );
  }
}

export default App;
