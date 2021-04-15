import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Sponsor1 from '../images/brand-logo/3.png';
import Sponsor2 from '../images/brand-logo/4.png';
import Sponsor3 from '../images/brand-logo/5.png';
import Sponsor4 from '../images/brand-logo/6.gif';
import Sponsor5 from '../images/brand-logo/7.png';
import Sponsor6 from '../images/brand-logo/8.png';
import Sponsor7 from '../images/brand-logo/9.png';
import Sponsor8 from '../images/brand-logo/1.png';

import './styles/sponsors.css';

export default class Sponsors extends Component {
  variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  render() {
    return (
      <div className="sponsors_container">
        <Fade up>
          <div className="sponsor1">
            <img src={Sponsor3} alt="" />
          </div>
        </Fade>
        <Fade up delay={100}>
          <div className="sponsor2">
            <img src={Sponsor8} alt="" />
          </div>
        </Fade>
        <Fade up delay={200}>
          <div className="sponsor3">
            <img src={Sponsor1} alt="" />
          </div>
        </Fade>
        <Fade up delay={300}>
          <div className="sponsor4">
            <img src={Sponsor2} alt="" />
          </div>
        </Fade>
        <Fade up delay={400}>
          <div className="sponsor5">
            <img src={Sponsor4} alt="" />
          </div>
        </Fade>
        <Fade up delay={500}>
          <div className="sponsor6">
            <img src={Sponsor5} alt="" />
          </div>
        </Fade>
        <Fade up delay={600}>
          <div className="sponsor7">
            <img src={Sponsor6} alt="" />
          </div>
        </Fade>
        <Fade up delay={700}>
          <div className="sponsor8">
            <img src={Sponsor7} alt="" />
          </div>
        </Fade>
      </div>
    );
  }
}
