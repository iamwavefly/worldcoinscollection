import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi';
import './styles/contactSection.css';

export default class ContactSection extends Component {
  render() {
    return (
      <div className="contact_container">
        <div className="contact_info">
          <Fade up>
            <h3 className="sub_header">Our Contact</h3>
          </Fade>
          <Fade up delay={600}>
            <h2>Get In Touch If You Have Any Complaint</h2>
          </Fade>
          <Fade up delay={700}>
            <p>
              You can contact us through email, contact form, or phone call.
              Whatever the miss of contact you are willing to use, our customer
              care service agent are available 24/7 to clear any of your doubt.
            </p>
          </Fade>
          <ul>
            <Fade delay={800}>
              <li>
                <a href="mailto:support@worldcoincollection.com">
                  <FiMail className="icon" />
                  support@worldcoincollection.com
                </a>
              </li>
            </Fade>
            <Fade delay={900}>
              <li>
                <a href="tel:+41 873 643 21">
                  <FiPhoneCall className="icon" /> +41 873 643 21
                </a>
              </li>
            </Fade>
          </ul>
        </div>
        <div className="contact_form">
          <Fade right>
            <form action="#">
              <div className="input_group">
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="input_group">
                <input type="email" placeholder="Enter your email address" />
              </div>
              <div className="input_group">
                <input type="number" placeholder="Enter your mobile number" />
              </div>
              <div className="input_group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter message..."
                ></textarea>
              </div>
              <button className="contact_form_btn" type="submit">
                Send Message
              </button>
            </form>
          </Fade>
        </div>
      </div>
    );
  }
}
