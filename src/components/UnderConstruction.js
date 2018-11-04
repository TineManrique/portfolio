import React, { Component } from 'react';
import underconstruction from '../assets/images/undraw_under_construction.png';
import './UnderConstruction.css';

class UnderConstruction extends Component {
  render() {
    return (
      <div className="UnderConstruction">
        <h1>This site is still under construction. <br></br>Sorry for the inconvenience.</h1>
        <img src={underconstruction} alt="Under Construction"></img>
      </div>
    );
  }
}

export default UnderConstruction;
