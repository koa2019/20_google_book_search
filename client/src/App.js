import React, { Component } from "react";
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
    //   <Router>
    //   <div>
    //     <Nav />
    //     <Switch>
    //       <Route exact path='/' component={Books} />
    //       {/* <Route exact path='/saved' component={Saved} /> */}
    //       {/* <Route component={NoMatch} /> */}
    //     </Switch>
    //   </div>
    // </Router>
    );
  }
}

export default App;
