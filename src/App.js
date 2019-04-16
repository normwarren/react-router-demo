import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import router from './router'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav /> 
          {router}
        </div>
      </Router>
    );
  }
}

export default App;
