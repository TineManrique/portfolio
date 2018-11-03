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
            <img src={about} alt="About"></img>
          </div>
          <div className="Content__column">
            <img src={work} alt="Work"></img>
          </div>
          <div className="Content__column">
            <img src={blog} alt="Blog"></img>
          </div>
          <div className="Content__column">
            <img src={contact} alt="Contact"></img>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
