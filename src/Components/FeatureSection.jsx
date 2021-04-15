/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Fade from 'react-reveal';

import './styles/featureSection.css';
import pat from '../images/icons/pat2.svg';
import img from '../images/dashboard.png';

export default class FeatureSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleIntersect = this.handleIntersect.bind(this);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="feature_container">
        <div className="feature_header">
          <Fade up>
            <h3 className="sub_header">Realtime Data Update</h3>
          </Fade>
          <Fade up delay={500}>
            <h2 id="elem">Manage All Deal In One Dashboard</h2>
          </Fade>
          <Fade up delay={600}>
            <p>
              You can now manage, create, edit and track all your deal in one
              place without creating another account. <a href="#">react-out</a>{' '}
              to us if you experience any issue
            </p>
          </Fade>
        </div>
        <div className="feature_img">
          <img src={pat} alt="" />
          <Fade up>
            <img src={img} alt="dashboard img" className="dashboard" />
          </Fade>
          <Fade up delay={1000}>
            <img src={img} alt="dashboard img" className="dashboard2" />
          </Fade>
          <Fade up delay={2000}>
            <img src={img} alt="dashboard img" className="dashboard3" />
          </Fade>
        </div>
      </div>
    );
  }
}
