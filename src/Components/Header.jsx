/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { FiChevronDown, FiPhoneCall } from 'react-icons/fi';
import Logo from '../images/logo-light.svg';
import menuIcon from '../images/icons/menu_icon.svg';
import menuIconClose from '../images/icons/menu_icon_close.svg';
import Flag1 from '../images/icons/flag1.png';
import './styles/header.css';
import { icons } from 'react-icons';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
    this.hamburger = this.hamburger.bind(this);
  }
  hamburger(e) {
    let mobileContainer = document.getElementById('mobile_container');
    let bannerBg = document.getElementById('banner_bg');
    let logo = document.getElementById('logo');
    mobileContainer.classList.toggle('open');
    bannerBg.classList.toggle('bg_blur');
    logo.classList.toggle('bg_blur');

    this.setState({
      openMenu: !this.state.openMenu,
    });
  }
  render() {
    return (
      <div className="header_container">
        {/* MAIN NAVBAR */}
        <Fade>
          <nav className="main_navbar">
            <ul className="left_nav">
              <li className="logo" id="logo">
                <img src={Logo} alt="world cc logo" />
              </li>
            </ul>
            {/* Hamburger mobile button */}
            <button onClick={this.hamburger} className="hamburger">
              <img
                src={this.state.openMenu === true ? menuIconClose : menuIcon}
              />
            </button>
            <div id="mobile_container" className="mobile_nav">
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
                <li className="focus_nav">
                  <a href="tel:+23445458573">Start Trading</a>
                </li>
                <li className="signin_nav">
                  <a href="#">Sign In</a>
                </li>
                <li className="flag_nav">
                  <img src={Flag1} alt="" />
                </li>
              </ul>
            </div>
          </nav>
        </Fade>
      </div>
    );
  }
}
