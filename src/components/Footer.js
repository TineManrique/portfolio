import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <section className="Footer">
        <div className="Footer__row">
          <div className="Footer__business">
            <p>Let's do some business!</p>
            <h5>Make your dream website one step closer.</h5>
            <div className="Footer__business-container">
              <TextField
                label="Your email here"
                className="Footer__business--input"
                margin="normal"
              />
              <Button className="Footer__business--button" variant="contained">Send</Button>
            </div>
          </div>
          <div className="Footer__navigation">
            <p>Navigation</p>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Her</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/contact">Get In Touch</Link>                  
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
              </ul>
          </div>
          <div className="Footer__legals">
            <p>Legals</p>
            <ul>
              <li>
                <Link to='/privacy'>Privacy</Link>
              </li>
              <li>
                <Link to='/terms'>Terms and Condition</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer__copy-right">
          <h5><b>Copy right © {(new Date().getFullYear())} All rights reserved.</b></h5>
        </div>
      </section>
    );
  }
}

export default Footer;
