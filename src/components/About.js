import React, { Component } from 'react';
import './About.scss';
import Footer from './Footer';
import UnderConstruction from './UnderConstruction';

class About extends Component {
  render() {
    return (
      <div className="About">
        <UnderConstruction></UnderConstruction>
        <Footer></Footer>
      </div>
    );
  }
}

export default About;
