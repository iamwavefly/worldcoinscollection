import React, { Component } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBell } from 'react-icons/fa';
import './styles/topheader.css';

export default class TopHeader extends Component {
  render() {
    return (
      <div className="topheader_container">
        <ul className="left_nav">
          <li className="address_nav">
            <FaMapMarkerAlt className="icon" />
            <a href="#">9234 Clayberry St Houston, TX 77080 United States</a>
          </li>
          <li>
            <FaPhone className="icon" />
            <a href="#">+12816129913</a>
          </li>
          <li>
            <FaEnvelope className="icon" />
            <a href="#">support@worldcoinscollection.com</a>
          </li>
        </ul>
        <ul className="right_nav">
          <li>
            <FaBell className="icon" />
            <a href="#">We now operating a new location at Lagos, Nigeria.</a>
          </li>
        </ul>
      </div>
    );
  }
}
