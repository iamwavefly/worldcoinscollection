/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { motion } from 'framer-motion';

import { FiChevronDown, FiPhoneCall } from 'react-icons/fi';
import Logo from '../images/logo.svg';
import './styles/header.css';
import TopHeader from './TopHeader';

export default class Header extends Component {
  variants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  render() {
    return (
      <div className="header_container">
        {/* <TopHeader /> */}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={this.variants}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            type: 'spring',
            // delay: 0.2,
          }}
          className="main_navbar"
        >
          <ul className="left_nav">
            <li className="logo">
              <img src={Logo} alt="world cc logo" />
            </li>
            <li>
              <a href="#">Entity type</a>
              <FiChevronDown />
            </li>
            <li>
              <a href="#">Manage</a>
              <FiChevronDown />
            </li>
            <li>
              <a href="#">Learn</a>
              <FiChevronDown />
            </li>
            <li>
              <a href="#">About</a>
              <FiChevronDown />
            </li>
          </ul>
          <ul className="right_nav">
            <li>
              <a href="tel:+23445458573">
                <FiPhoneCall className="phone-icon" /> +23445458573
              </a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Create Account</a>
            </li>
          </ul>
        </motion.nav>
      </div>
    );
  }
}
