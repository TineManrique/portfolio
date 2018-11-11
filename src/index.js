import React from 'react';
import ReactDOM from 'react-dom';
import Async from 'react-code-splitting';
import * as serviceWorker from './serviceWorker';
// const Main = () => (<Async load={import('./Main')}/>);

// ReactDOM.render(
//   <BrowserRouter>
//     <Main/>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

 const App = () => (
    <div>
       <h1>Hello world!!</h1>
    </div>
  )

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
