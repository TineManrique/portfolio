import React, { Component } from 'react';
import './Work.scss';
import Footer from './Footer';
import UnderConstruction from './UnderConstruction';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <UnderConstruction></UnderConstruction>
        <Footer></Footer>
      </div>
    );
  }
}

export default Work;
