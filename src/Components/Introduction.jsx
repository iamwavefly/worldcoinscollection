import React, { Component } from 'react';
import { motion } from 'framer-motion';

import img1 from '../images/icons/establishment.png';
import img2 from '../images/icons/history.png';
import img3 from '../images/icons/numismatic.png';

import './styles/introduction.css';

export default class Introduction extends Component {
  headerVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  mainVariants = {
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
      <div className="introd_container">
        <div className="introd_header">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={this.headerVariants}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.1,
            }}
          >
            Brief Information About Us
          </motion.h2>
          {/* <p>
            Our journey is being amazing with people around us and how we are to
            contribute to the community.
          </p> */}
          <div className="underline"></div>
        </div>
        <div className="introd_content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={this.mainVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.2,
            }}
            className="content1"
          >
            <img src={img1} alt="establishment img" className="content_icon" />
            <h3 className="content_title">Our History</h3>
            <p>
              As is the case with many numismatic firms, the history of the
              WORLDCC is part and parcel of the biography of an individual.
            </p>
            <a href="#">
              Learn More <span>&rarr;</span>
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={this.mainVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.5,
            }}
            className="content2"
          >
            <img src={img2} alt="history img" className="content_icon" />
            <h3 className="content_title">Establishment</h3>
            <p>
              Hilbert was honorably discharged from the military in October
              1945, having served as a military policeman in Northern Africa and
              Italy.
            </p>
            <a href="#">
              Learn More <span>&rarr;</span>
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={this.mainVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 1,
            }}
            className="content3"
          >
            <img src={img3} alt="numismatic img" className="content_icon" />
            <h3 className="content_title">Numismatic</h3>
            <p>
              By 1954 the Asia Old Stamp Company had grown to an operation of
              sufficient scope to employ 60 people, with fully 99% of the
              company's business
            </p>
            <a href="#">
              Learn More <span>&rarr;</span>
            </a>
          </motion.div>
        </div>
      </div>
    );
  }
}
