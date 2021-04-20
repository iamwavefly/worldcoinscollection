/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import OptinsForm from './OptinsForm';
// Images
import pat1 from '../images/icons/pat1.svg';
import pat2 from '../images/icons/pat2.svg';
import review from '../images/icons/review.svg';
import review2 from '../images/icons/review2.svg';
import review3 from '../images/icons/review3.svg';
import background from '../images/icons/bg.svg';
import BanImg from '../images/banner.png';
import './styles/main.css';
import SleakSocialLinks from './SleakSocialLinks';
import NoticeBoard from './NoticeBoard';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetY: 0,
      currentCount: 10,
      seller: 10,
      intervalId: '',
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.timer = this.timer.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    var intervalId = setInterval(this.timer, 5000);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
  }
  timer() {
    // setState method is used to update the state
    this.setState({ seller: this.state.seller + 1 });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.state.intervalId);
  }
  handleScroll(event) {
    let offsetY = window.pageYOffset;
    this.setState({
      offsetY: offsetY,
    });
  }
  render() {
    return (
      <div className="main_bg">
        <section className="main_container">
          <Fade up>
            <h1>Sell Old Coins, Notes & Antiques</h1>
          </Fade>
          {/* PARAGRAPH */}
          <Fade up duration={1000}>
            <p>Current rate 1kg 1880 - 2000 = $200 * 4.5</p>
          </Fade>
          <div className="btn_group">
            <button
              onClick={() => {
                this.handleCounter();
              }}
            >
              Talk to Agent
            </button>
            <button>Contact Us</button>
          </div>
          <SleakSocialLinks />
          <div className="project_counter">
            <p className="project_counter_header">Realtime Statistics</p>
            <div className="counter">
              <div className="frame1">
                <h2>0022</h2>
                <span>Projects</span>
              </div>
              <div className="frame2">
                <h2>22</h2>
                <span>Clients</span>
              </div>
              <div className="frame3">
                <h2>$202k</h2>
                <span>Crowdfund</span>
              </div>
              <div className="frame4">
                <h2>{this.state.seller}</h2>
                <span>Active Seller</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
