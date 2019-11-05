import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import Books from './pages/Books';
import Saved from './pages/Saved';
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={Books} />
            <Route exact path='/books' component={Books} />
            <Route exact path='/saved' component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
