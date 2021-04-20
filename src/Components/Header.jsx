/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { FiChevronDown, FiPhoneCall } from 'react-icons/fi';
import Logo from '../images/logo-light.svg';
import Flag1 from '../images/icons/flag1.png';
import './styles/header.css';

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
            </ul>
            <ul className="center_nav">
              <li className="active">
                <a href="#">Home</a>
                <FiChevronDown id="nav_icon" />
              </li>
              <li>
                <a href="#">Services</a>
                <FiChevronDown className="nav_icon" />
              </li>
              <li>
                <a href="#">About</a>
                <FiChevronDown className="nav_icon" />
              </li>
              <li>
                <a href="#">FAQ's</a>
                <FiChevronDown className="nav_icon" />
              </li>
              <li>
                <a href="#">Contact</a>
                <FiChevronDown className="nav_icon" />
              </li>
            </ul>
            <ul className="right_nav">
              <li>
                <a href="tel:+23445458573">Login</a>
              </li>
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <img src={Flag1} alt="" />
              </li>
            </ul>
          </nav>
        </Fade>
      </div>
    );
  }
}
