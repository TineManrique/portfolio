import React, {Component} from 'react';
// import Async from 'react-code-splitting';
import {Route, Switch, withRouter} from 'react-router-dom';

// const About = () => (<Async load={import('./components/About')}/>);
// const Contact = () => (<Async load={import('./components/Contact')}/>);
// const Home = () => (<Async load={import('./components/Home')}/>);
// const Error404 = () => (<Async load={import('./components/Error')}/>);
const About = () => (
      <div>
         <h1>Hello world!!</h1>
      </div>
    );

const Home = () => (
  <div>
      <h1>Home</h1>
  </div>
);

class Main extends Component {
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
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);