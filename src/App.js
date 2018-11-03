import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/work" component={Work}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
