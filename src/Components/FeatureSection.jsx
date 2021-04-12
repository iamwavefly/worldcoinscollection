import React, { Component } from 'react';
import { motion, useAnimation } from 'framer-motion';

import './styles/featureSection.css';
import pat from '../images/icons/pat2.svg';
import img from '../images/dashboard.png';

export default class FeatureSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intersecting: false,
    };
  }
  visible = '';
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
  componentDidMount() {
    let observer;
    let elem = document.getElementById('elem');
    let option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const handleIntersect = (entries, observer) => {
      if (entries[0].isIntersecting === true) {
        console.log('intersecting');
        this.setState({ intersecting: true });
      } else {
        this.setState({ intersecting: false });
      }
      console.log('from state:', this.state.intersecting);
    };
    observer = new IntersectionObserver(handleIntersect, option);
    observer.observe(elem);
  }
  render() {
    return (
      <div className="feature_container">
        <div className="feature_header">
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
            Realtime Data Update
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
            id="elem"
          >
            Manage All Deal In One Dashboard
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
            You can now manage, create, edit and track all your deal in one
            place without creating another account. <a href="#">react-out</a> to
            us if you experience any issue
          </motion.p>
        </div>
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
          className="feature_img"
        >
          <motion.img
            variants={this.variants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 1,
            }}
            src={pat}
            alt=""
          />
          <motion.img
            variants={this.variants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 1,
            }}
            src={img}
            alt="dashboard img"
            className="dashboard"
          />
          <motion.img
            variants={this.variants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.5,
            }}
            src={img}
            alt="dashboard img"
            className="dashboard2"
          />
          <motion.img
            variants={this.variants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.1,
            }}
            src={img}
            alt="dashboard img"
            className="dashboard3"
          />
        </motion.div>
      </div>
    );
  }
}
