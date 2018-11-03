import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import TermsAndCondition from './components/TermsAndCondition';
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
            <Route path="/blog" component={Contact}/>
            <Route path="/privacy" component={Privacy}/>
            <Route path="/terms" component={TermsAndCondition}/>
            <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
