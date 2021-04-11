import React, { Component } from 'react';
import { motion } from 'framer-motion';

import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './styles/sleakSocialLinks.css';

export default class SleakSocialLinks extends Component {
  linksVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  render() {
    return (
      <div>
        <div className="sleak_link_icons">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={this.linksVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.1,
            }}
            className="icon1"
          >
            <FaLinkedinIn />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={this.linksVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.2,
            }}
            className="icon2"
          >
            <FaFacebookF />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={this.linksVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.3,
            }}
            className="icon3"
          >
            <FaTwitter />
          </motion.div>
          <span className="follow_us">Follow Us:</span>
        </div>
      </div>
    );
  }
}
