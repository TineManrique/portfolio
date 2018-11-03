import React, { Component } from 'react';
import underconstruction from '../assets/images/undraw_under_construction.png';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>This site is still under construction. <br></br>Sorry for the inconvenience.</h1>
        <img src={underconstruction} alt="Under Construction"></img>
      </div>
    );
  }
}

export default About;
