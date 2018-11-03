import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

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
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href="/about">About Her</a>
                </li>
                <li>
                  <a href="/work">Work</a>
                </li>
                <li>
                  <a href="/contact">Get In Touch</a>
                </li>
                <li>
                  <a href='/blog'>Blog</a>
                </li>
              </ul>
          </div>
          <div className="Footer__legals">
            <p>Legals</p>
            <ul>
              <li>
                <a href='/privacy'>Privacy</a>
              </li>
              <li>
                <a href='/terms'>Terms and Condition</a>
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
