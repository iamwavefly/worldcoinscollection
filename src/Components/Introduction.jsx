import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import img1 from '../images/icons/history.svg';
import img2 from '../images/icons/establishment.svg';
import img3 from '../images/icons/numismatic.svg';

import './styles/introduction.css';

export default class Introduction extends Component {
  render() {
    return (
      <div className="introd_container">
        <div className="introd_header">
          <Fade up>
            <h3 className="sub_header">Introduction</h3>
          </Fade>
          <Fade up delay={200}>
            <h2>Brief Information About Us</h2>
          </Fade>
          {/* <p>
            Our journey is being amazing with people around us and how we are to
            contribute to the community.
          </p> */}
        </div>
        <div className="introd_content">
          <Fade up>
            <div className="content1">
              <div className="icon_wrap">
                <img
                  src={img1}
                  alt="establishment img"
                  className="content_icon"
                />
              </div>
              <h3 className="content_title">Our History</h3>
              <p>
                As is the case with many numismatic firms, the history of the
                WORLDCC is part and parcel of the biography of an individual.
              </p>
              <a href="#">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          </Fade>
          <Fade up delay={500}>
            <div className="content2">
              <div className="icon_wrap">
                <img
                  src={img2}
                  alt="establishment img"
                  className="content_icon"
                />
              </div>
              <h3 className="content_title">Establishment</h3>
              <p>
                Hilbert was honorably discharged from the military in October
                1945, having served as a military policeman in Northern Africa
                and Italy.
              </p>
              <a href="#">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          </Fade>
          <Fade up delay={700}>
            <div className="content3">
              <div className="icon_wrap">
                <img
                  src={img3}
                  alt="establishment img"
                  className="content_icon"
                />
              </div>
              <h3 className="content_title">Numismatic</h3>
              <p>
                By 1954 the Asia Old Stamp Company had grown to an operation of
                sufficient scope to employ 60 people, with fully 99% of the
                company's business
              </p>
              <a href="#">
                Learn More <span>&rarr;</span>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
