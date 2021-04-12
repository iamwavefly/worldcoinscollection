import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiUserCheck } from 'react-icons/fi';

import './styles/insightSection.css';

import globalBall from '../images/global_ball.svg';
import img from '../images/insight_img.png';
import pat from '../images/icons/pat2.svg';
import review from '../images/icons/review4.svg';
import review2 from '../images/icons/review5.svg';

export default class InsightSection extends Component {
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
      <div className="insight_bg">
        <div className="insight_container">
          <div className="ScrollBall">
            <img src={globalBall} alt="" srcset="" />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={this.variants}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.1,
            }}
            className="content1"
          >
            <img src={pat} alt="" />
            <img src={img} className="insight_img" alt="insight img" />
            <motion.img
              initial="hidden"
              animate="visible"
              variants={this.variants}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.5,
              }}
              src={review}
              alt="Insight Review"
              class="insight_review"
            />
            <motion.img
              initial="hidden"
              animate="visible"
              variants={this.variants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 2,
              }}
              src={review2}
              alt="Insight Review"
              class="insight_review2"
            />
          </motion.div>
          <div className="content2">
            <motion.h3
              initial="hidden"
              animate="visible"
              variants={this.variants}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.2,
              }}
              className="sub_header"
            >
              What We Offer
            </motion.h3>
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
              Make Money Out Of Your Old Stuffs
            </motion.h2>
            <div className="cards">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={this.variants}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  type: 'spring',
                  delay: 0.4,
                }}
                className="card1"
              >
                <div className="card_icon">
                  <FiTrendingUp className="icon" />
                </div>
                <div className="card_content">
                  <h3>Passive Income Stream</h3>
                  <p>
                    If you get old coins or old notes, you can turn them to
                    money.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={this.variants}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  type: 'spring',
                  delay: 0.6,
                }}
                className="card2"
              >
                <div className="card_icon">
                  <FiUserCheck className="icon" />
                </div>
                <div className="card_content">
                  <h3>Most Reliable</h3>
                  <p>
                    Once you very your profile, you can get paid within 48hours
                  </p>
                </div>
              </motion.div>
            </div>
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
              Start Trading <span>&rarr;</span>
            </motion.a>
          </div>
        </div>
      </div>
    );
  }
}
