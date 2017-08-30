import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseLayout from './components/BaseLayout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <BaseLayout>
        <Switch>
          <Route path="/" component={BaseLayout}/>
        </Switch>
      </BaseLayout>
      </Router>
    );
  }
}

export default App;
