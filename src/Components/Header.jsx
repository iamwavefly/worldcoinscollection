/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { FiChevronDown, FiPhoneCall } from 'react-icons/fi';
import Logo from '../images/logo.svg';
import './styles/header.css';
import TopHeader from './TopHeader';

export default class Header extends Component {
  render() {
    return (
      <div className="header_container">
        {/* MAIN NAVBAR */}
        <Fade>
          <nav className="main_navbar">
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
          </nav>
        </Fade>
      </div>
    );
  }
}
