import React, { Component } from 'react';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';

import Logo from '../images/logo-light.svg';
import './styles/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer_container">
        <nav className="main_navbar footer_navbar">
          <ul className="left_nav">
            <li className="logo">
              <img src={Logo} alt="world cc logo" />
            </li>
            <li>
              <a href="#">Entity type</a>
            </li>
            <li>
              <a href="#">Manage</a>
            </li>
            <li>
              <a href="#">Learn</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <ul className="right_nav">
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Signin</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </nav>
        <div className="footer_social_icon">
          <div className="">
            <FaLinkedinIn />
          </div>

          <div className="">
            <FaFacebookF />
          </div>

          <div className="">
            <FaTwitter />
          </div>
        </div>
        <div className="copyright">
          <span>
            &copy; {new Date().getFullYear()} WorldCC, All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  }
}
