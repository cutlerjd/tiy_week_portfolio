import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import ProductList from './components/ProductList'
import Places from './components/Places'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={ProductList}/>
          <Route exact path="/places" component={Places}/>
        </Switch>
      </BaseLayout>
      </Router>
    );
  }
}

export default App;
