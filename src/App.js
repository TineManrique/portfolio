import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/work" component={Work}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/blog" component={Contact}/>
            <Route exact path="/privacy" component={Privacy}/>
            <Route exact path="/terms" component={TermsAndCondition}/>
            <Route exact component={Error}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
