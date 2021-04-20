import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaBtc,
  FaPinterestP,
} from 'react-icons/fa';
import './styles/sleakSocialLinks.css';

export default class SleakSocialLinks extends Component {
  render() {
    return (
      <div>
        <div className="sleak_link_icons">
          <Fade up delay={600}>
            <div className="icon_wrapper icon1">
              <FaLinkedinIn />
            </div>
          </Fade>
          <Fade up delay={900}>
            <div className="icon_wrapper icon2">
              <FaFacebookF />
            </div>
          </Fade>
          <Fade up delay={1000}>
            <div className="icon_wrapper icon3">
              <FaTwitter />
            </div>
          </Fade>
          <Fade up delay={1000}>
            <div className="icon_wrapper icon3">
              <FaBtc />
            </div>
          </Fade>
          <Fade up delay={1000}>
            <div className="icon_wrapper icon3">
              <FaPinterestP />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
