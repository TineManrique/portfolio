import React, {Component} from 'react';
import Async from 'react-code-splitting';
import {Route, Switch, withRouter} from 'react-router-dom';

const About = () => (<Async load={import('./components/About')}/>);
const Contact = () => (<Async load={import('./components/Contact')}/>);
const Home = () => (<Async load={import('./components/Home')}/>);
const Error404 = () => (<Async load={import('./components/Error')}/>);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: true
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={'/'}>
            <Home/>
          </Route>
          <Route exact path={'/about'}>
            <About/>
          </Route>
          <Route exact path={'/contact'}>
            <Contact/>
          </Route>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);