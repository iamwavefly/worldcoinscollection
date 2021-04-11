import React, { Component } from 'react';
import './styles/topheader.css';

export default class TopHeader extends Component {
  render() {
    return (
      <div className="topheader_container">
        <span>
          Welcome, please beware of fake agent from worldcc, always ask of ID,
          thanks.
        </span>
      </div>
    );
  }
}
