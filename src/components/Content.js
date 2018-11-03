import React, { Component } from 'react';
import about from '../assets/images/undraw_resume.png';
import work from '../assets/images/undraw_work2.png';
import blog from '../assets/images/undraw_blog.png';
import contact from '../assets/images/undraw_contact.png';

class Content extends Component {
  render() {
    return (
      <section className="Content">
        <div className="Content__row">
          <div className="Content__column">
            <a href="/about">
              <img src={about} alt="About"></img>
            </a>
          </div>
          <div className="Content__column">
            <a href="/work">
              <img src={work} alt="Work"></img>
            </a>
          </div>
          <div className="Content__column">
            <a href="/blog">
              <img src={blog} alt="Blog"></img>
            </a>
          </div>
          <div className="Content__column">
            <a href="/contact">
              <img src={contact} alt="Contact"></img>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
