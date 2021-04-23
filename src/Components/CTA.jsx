import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './styles/cta.css';

export default class CTA extends Component {
  render() {
    return (
      <div className="cta_bg">
        <div className="cta_header">
          <Fade up>
            <h3 className="sub_header light">Our Work Way</h3>
          </Fade>
          <Fade up delay={500}>
            <h2 id="elem">How It Works & Approval Stage</h2>
          </Fade>
        </div>
        <div className="cta_content">
          <Fade up>
            <div className="step1">
              <span>1</span>
              <div className="dot"></div>
              <h3>Create Account</h3>
            </div>
          </Fade>
          <Fade up delay={600}>
            <div className="step2">
              <span>2</span>
              <div className="dot"></div>
              <h3>Snap Your Products</h3>
            </div>
          </Fade>
          <Fade up delay={700}>
            <div className="step3">
              <span>3</span>
              <div className="dot"></div>
              <h3>Approval Process</h3>
            </div>
          </Fade>
          <Fade up delay={800}>
            <div className="step4">
              <span>4</span>
              <div className="dot"></div>
              <h3>Send Products </h3>
            </div>
          </Fade>
          <Fade up delay={900}>
            <div className="step5">
              <span>5</span>
              <div className="dot"></div>
              <h3>Get Paid Instantly</h3>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
