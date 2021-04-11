/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { motion } from 'framer-motion';

import Flickity from 'react-flickity-component';
import './styles/flickity.min.css';
import './styles/testimonies.css';
import img1 from '../images/testimonies/1.jpg';
import img2 from '../images/testimonies/2.jpg';
import img3 from '../images/testimonies/3.jpg';
import img4 from '../images/testimonies/4.jpg';

export default class Testimonies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={this.variants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.2,
              }}
            >
              What People Are Saying About Us
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={this.variants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.4,
              }}
            >
              We are not just the best old coins trading platform in the World
              but we are most reliable.
            </motion.p>
          </div>
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={this.flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <div className="slide slide1">
              <div className="img_wrapper">
                <img src={img1} />
              </div>
              <div className="carousel_content">
                <h2>Nurul (Malaysia)</h2>
                <h3>Receptionist</h3>
                <p>
                  At first, i think this is scam but i later realized that this
                  is true, i received my money as they promised, thank you much
                  Mr Anderson, you like God to my family, God bless you
                  abondantly.
                </p>
              </div>
            </div>
            <div className="slide slide2">
              <div className="img_wrapper">
                <img src={img2} />
              </div>
              <div className="carousel_content">
                <h2>Aminah (Malaysia)</h2>
                <h3>Office Assistance</h3>
                <p>
                  I got my money after paying the approval fee, i was told to
                  upgrade my account before i will receive money, Thank you Asia
                  Old Money.
                </p>
              </div>
            </div>
            <div className="slide slide3">
              <div className="img_wrapper">
                <img src={img3} />
              </div>
              <div className="carousel_content">
                <h2>Apinya (Thailand)</h2>
                <h3>Store Keeper</h3>
                <p>
                  Mr Anderson is a very nice man to me, i never knew this was
                  real until i gave it a trial, at last i received my money in
                  my account.
                </p>
              </div>
            </div>
            <div className="slide slide4">
              <div className="img_wrapper">
                <img src={img4} />
              </div>
              <div className="carousel_content">
                <h2>Iman (Indonessia)</h2>
                <h3>Teacher</h3>
                <p>
                  I am really happy for you that our deal was successful despite
                  all we have been through together Allahamdulilahi deal was
                  successful with me.
                </p>
              </div>
            </div>
          </Flickity>
        </div>
      </div>
    );
  }
}
