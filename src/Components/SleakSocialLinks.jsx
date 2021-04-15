import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './styles/sleakSocialLinks.css';

export default class SleakSocialLinks extends Component {
  render() {
    return (
      <div>
        <div className="sleak_link_icons">
          <Fade up delay={600}>
            <div className="icon1">
              <FaLinkedinIn />
            </div>
          </Fade>
          <Fade up delay={900}>
            <div className="icon2">
              <FaFacebookF />
            </div>
          </Fade>
          <Fade up delay={1000}>
            <div className="icon3">
              <FaTwitter />
            </div>
          </Fade>
          <span className="follow_us">Follow Us:</span>
        </div>
      </div>
    );
  }
}
