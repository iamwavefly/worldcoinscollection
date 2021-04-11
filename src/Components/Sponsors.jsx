import React, { Component } from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={this.variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.2 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring',
            delay: 0.1,
          }}
          className="sponsor1"
        >
          <img src={Sponsor3} alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={this.variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.2 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring',
            delay: 0.2,
          }}
          className="sponsor2"
        >
          <img src={Sponsor8} alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={this.variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.2 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring',
            delay: 0.3,
          }}
          className="sponsor3"
        >
          <img src={Sponsor1} alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={this.variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.2 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring',
            delay: 0.4,
          }}
          className="sponsor4"
        >
          <img src={Sponsor2} alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={this.variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.2 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring',
            delay: 0.5,
          }}
          className="sponsor5"
        >
          <img src={Sponsor4} alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={this.variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.2 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring',
            delay: 0.6,
          }}
          className="sponsor6"
        >
          <img src={Sponsor5} alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={this.variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.2 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring',
            delay: 0.7,
          }}
          className="sponsor7"
        >
          <img src={Sponsor6} alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={this.variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.2 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring',
            delay: 0.8,
          }}
          className="sponsor8"
        >
          <img src={Sponsor7} alt="" />
        </motion.div>
      </div>
    );
  }
}
