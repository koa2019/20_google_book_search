import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import Books from './pages/Books';
import Saved from './pages/Saved';
import Quiz from './pages/Quiz';
import FrontPage from "./pages/FrontPage";
import UserProfile from "./pages/UserProfile";
import CandidateProfile from "./pages/CandidateProfile";
import "./App.css";

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
            {/* change /home to / after file is merged with backend */}
            <Route exact path="/home" component={FrontPage} />
            <Route exact path='/quiz' component={Quiz} />
            <Route exact path="/userprofile"  component={UserProfile} />
          <Route exact path="/candidateprofile"  component={CandidateProfile} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
