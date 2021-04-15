import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import calcImg from '../images/icons/calc.svg';
import calcImg2 from '../images/icons/calc2.svg';

import './styles/cta.css';
import arrDir from '../images/icons/arrow_dir.svg';
import pat from '../images/icons/pat2.svg';
import banner from '../images/cta_img.png';

export default class CTA extends Component {
  render() {
    return (
      <div className="cta-bg">
        <div className="cta_container">
          <div className="left_column">
            <Fade up>
              <h3 className="sub_header">Transparent Transaction</h3>
            </Fade>
            <Fade up delay={600}>
              <h2>Know The Value Of Your Old Coins/Notes Now</h2>
            </Fade>
            <Fade up delay={700}>
              <p>
                We have make it super simple for you to get started, just snap
                your old coins/note to us or upload it in deal section if your
                account is already approved, and we will you get the worth
                immediately.
              </p>
            </Fade>
            <Fade up delay={800}>
              <a href="#">
                Ok, let start <span>&rarr;</span>
              </a>
            </Fade>
            <div className="optins_intru">
              <img src={arrDir} alt="" />
              <Fade up delay={900}>
                <span>
                  click on this button to start trading your old coin/notes or{' '}
                  <a href="#">contact us</a> now.
                </span>
              </Fade>
            </div>
          </div>
          <div className="right_column">
            <img src={pat} alt="" />
            <Fade up delay={1000}>
              <img src={calcImg} alt="" className="calc_img" />
            </Fade>
            <Fade up delay={2000}>
              <img src={calcImg2} alt="" className="calc_img2" />
            </Fade>
            <Fade right>
              <img src={banner} alt="" />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
