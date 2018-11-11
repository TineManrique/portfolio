import React, { Component } from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Content from './Content';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <Banner></Banner>
          <Content></Content>
          <Footer></Footer>
      </div>
    );
  }
}

export default Home;
