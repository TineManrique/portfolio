import React, { Component } from 'react';
import lost from '../assets/images/undraw_lost.png';
import './Error.css';
import Footer from './Footer';

class Error extends Component {
  render() {
    return (
      <div className="Error">
        <h1>Seems like you are lost.<br></br>Please return to our homepage.</h1>
        <img src={lost} alt="Lost"></img>
        <Footer></Footer>
      </div>
    );
  }
}

export default Error;
