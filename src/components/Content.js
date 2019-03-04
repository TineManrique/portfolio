import React, { Component } from 'react';
import about from '../assets/images/undraw_resume.png';
import work from '../assets/images/undraw_work.png';
import blog from '../assets/images/undraw_blog.png';
import contact from '../assets/images/undraw_contact.png';
import { Link } from 'react-router-dom';

class Content extends Component {
  render() {
    return (
      <section className="Content">
        <div className="Content__row">
          <div className="Content__column">
            <Link to="/about">
              <img src={about} alt="About"></img>
            </Link>
          </div>
          <div className="Content__column">
            <Link to="/work">
              <img src={work} alt="Work"></img>
            </Link>
          </div>
          <div className="Content__column">
            <Link to="/blog">
              <img src={blog} alt="Blog"></img>
            </Link>
          </div>
          <div className="Content__column">
            <Link to="/contact">
              <img src={contact} alt="Contact"></img>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
