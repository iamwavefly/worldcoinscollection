import React, { Component } from 'react';
import { FiPhoneCall } from 'react-icons/fi';

import Logo from '../images/logo.svg';
import './styles/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer_container">
        <div className="columns">
          <div className="column1">
            <h3>WorldCC</h3>
            <p>
              By 1954 the Asia Old Stamp Company had grown to an operation of
              sufficient scope to employ 60 people, with fully 99% of the
              company's business
            </p>
          </div>
          <div className="column2">
            <h3>Contact Us</h3>
            <p>
              By 1954 the Asia Old Stamp Company had grown to an operation of
              sufficient scope to employ 60 people
            </p>
          </div>
          <div className="column3">
            <h3>About Us</h3>
            <p>
              By 1954 the Asia Old Stamp Company had grown to an operation of
              sufficient scope to employ 60 people, with fully 99% of the
            </p>
          </div>
        </div>
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
              <a href="tel:+23445458573">
                <FiPhoneCall className="phone-icon" /> +23445458573
              </a>
            </li>
            <li>
              <a href="#">Signin</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        </nav>
        <div className="copyright">
          <span>
            &copy; {new Date().getFullYear()} WorldCC, All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  }
}
