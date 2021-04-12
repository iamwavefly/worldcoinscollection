/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import OptinsForm from './OptinsForm';
// Images
import pat1 from '../images/icons/pat1.svg';
import pat2 from '../images/icons/pat2.svg';
import arrDir from '../images/icons/arrow_dir.svg';
import review from '../images/icons/review.svg';
import review2 from '../images/icons/review2.svg';
import review3 from '../images/icons/review3.svg';
import background from '../images/icons/bg.svg';
import BanImg from '../images/banner.png';
import './styles/main.css';
import SleakSocialLinks from './SleakSocialLinks';
import NoticeBoard from './NoticeBoard';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  bannerVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  imgVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
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
  paragraphVariants = {
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
    console.log(this.variants);
    return (
      <div className="main_bg">
        <section className="main_container">
          <div className="left_section">
            <SleakSocialLinks />
            <NoticeBoard />
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={this.headerVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.2 }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.2,
              }}
            >
              Sell & Buy <span className="light_word">Old Coins</span>, Notes
              and Antiques <br /> in <mark>Minute</mark>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={this.paragraphVariants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.5,
              }}
            >
              Transform your Old Coins into money using our quick, secure and
              free assistance. With Vintage Money Cow.
            </motion.p>
            <OptinsForm />
            <div className="optins_intru">
              <img src={arrDir} alt="" />
              <span>
                It's easy to get started, just select your entity type and we
                will email you the necessary steps or you can{' '}
                <a href="#">contact us</a>
              </span>
            </div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={this.bannerVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.5,
            }}
            className="right_section"
          >
            <motion.img
              initial="hidden"
              animate="visible"
              variants={this.imgVariants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 1,
              }}
              src={pat1}
              alt="pattern"
              className="pat1"
            />
            <motion.img
              initial="hidden"
              animate="visible"
              variants={this.imgVariants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.8,
              }}
              src={pat2}
              alt="pattern"
              className="pat2"
            />
            <motion.img
              initial="hidden"
              animate="visible"
              variants={this.imgVariants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 1,
              }}
              src={review}
              alt="review"
              className="review_box"
            />
            <motion.img
              initial="hidden"
              animate="visible"
              variants={this.imgVariants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 3,
              }}
              src={review2}
              alt="review"
              className="review_box2"
            />
            <motion.img
              initial="hidden"
              animate="visible"
              variants={this.imgVariants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 4,
              }}
              src={review3}
              alt="review"
              className="review_box3"
            />
            <img src={background} alt="backgound" class="background" />
            <div className="banner">
              <img src={BanImg} alt="" />
            </div>
          </motion.div>
        </section>
      </div>
    );
  }
}
