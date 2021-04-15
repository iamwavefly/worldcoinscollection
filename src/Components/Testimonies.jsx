/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Flickity from 'react-flickity-component';
import './styles/flickity.min.css';
import './styles/testimonies.css';
import img1 from '../images/testimonies/1.jpg';
import img2 from '../images/testimonies/2.jpg';
import img3 from '../images/testimonies/3.jpg';
import img4 from '../images/testimonies/4.jpg';
// REVIEW ICONS
import rating from '../images/icons/rating.svg';
import rating2 from '../images/icons/rating2.svg';
import rating3 from '../images/icons/rating3.svg';
import rating4 from '../images/icons/rating4.svg';

export default class Testimonies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  flickityOptions = {
    initialIndex: 2,
    freeScroll: true,
    contain: true,
    wrapAround: true,
    groupCells: 1,
    autoPlay: 4000,
    imagesLoaded: true,
    fade: true,
    friction: 0.8,
    pageDots: false,
  };
  componentDidMount() {
    console.log(this.flickityOptions.initialIndex);
  }
  render() {
    return (
      <div className="testimonies_bg">
        <div className="testimonies_container">
          <div className="header">
            <Fade up>
              <h3 className="sub_header">What People Says About Us</h3>
            </Fade>
            <Fade up delay={600}>
              <h2>Review From Our Esteem Clients</h2>
            </Fade>
            <Fade up delay={700}>
              <p>
                We are not just the best old coins trading platform in the World
                but we are most reliable.
              </p>
            </Fade>
          </div>
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={this.flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {/* REVIEW START */}
            <div className="slide slide1">
              <div className="carousel_content">
                <img src={rating} className="rating" />
                <p>
                  At first, i think this is scam but i later realized that this
                  is true, i received my money as they promised, thank you much
                  Mr Anderson, you like God to my family, God bless you
                  abondantly.
                </p>
              </div>
              <div className="review_user">
                <div className="img_wrapper">
                  <img src={img1} />
                </div>
                <h3>Nurul (Malaysia)</h3>
              </div>
            </div>
            <div className="slide slide2">
              <div className="carousel_content">
                <img src={rating2} className="rating" />
                <p>
                  I got my money after paying the approval fee, i was told to
                  upgrade my account before i will receive money, Thank you Asia
                  Old Money.
                </p>
              </div>
              <div className="review_user">
                <div className="img_wrapper">
                  <img src={img2} />
                </div>
                <h3>Aminah (Malaysia)</h3>
              </div>
            </div>
            <div className="slide slide3">
              <div className="carousel_content">
                <img src={rating3} className="rating" />
                <p>
                  Mr Anderson is a very nice man to me, i never knew this was
                  real until i gave it a trial, at last i received my money in
                  my account.
                </p>
              </div>
              <div className="review_user">
                <div className="img_wrapper">
                  <img src={img3} />
                </div>
                <h3>Apinya (Thailand)</h3>
              </div>
            </div>
            <div className="slide slide4">
              <div className="carousel_content">
                <img src={rating4} className="rating" />
                <p>
                  I am really happy for you that our deal was successful despite
                  all we have been through together Allahamdulilahi deal was
                  successful with me.
                </p>
              </div>
              <div className="review_user">
                <div className="img_wrapper">
                  <img src={img4} />
                </div>
                <h3>Iman (Indonessia)</h3>
              </div>
            </div>
          </Flickity>
        </div>
      </div>
    );
  }
}
