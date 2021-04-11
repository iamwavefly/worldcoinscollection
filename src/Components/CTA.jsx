import React, { Component } from 'react';
import { motion } from 'framer-motion';

import './styles/cta.css';
import arrDir from '../images/icons/arrow_dir.svg';
import pat from '../images/icons/pat2.svg';
import banner from '../images/banner.png';

export default class CTA extends Component {
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
      <div className="cta-bg">
        <div className="cta_container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={this.variants}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.2,
            }}
            className="left_column"
          >
            <img src={pat} alt="" />
            <img src={banner} alt="" />
          </motion.div>
          <div className="right_column">
            <motion.h2
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
              Know The Value Of Your Old Coins/Notes Now
            </motion.h2>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={this.variants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.6,
              }}
            >
              We have make it super simple for you to get started, just snap
              your old coins/note to us or upload it in deal section if your
              account is already approved, and we will you get the worth
              immediately.
            </motion.p>
            <motion.a
              initial="hidden"
              animate="visible"
              variants={this.variants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.8,
              }}
              href="#"
            >
              Ok, let start <span>&rarr;</span>
            </motion.a>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={this.variants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 1,
              }}
              className="optins_intru"
            >
              <img src={arrDir} alt="" />
              <span>
                click on this button to start trading your old coin/notes or{' '}
                <a href="#">contact us</a> now.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}
