/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import OptinsForm from './OptinsForm';
// Images
import pat1 from '../images/icons/pat1.svg';
import pat2 from '../images/icons/pat2.svg';
import arrDir from '../images/icons/arrow_dir.svg';
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
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
          <div className="left_section">
            <SleakSocialLinks />
            {/* NOTICE BOX */}
            <NoticeBoard />
            {/* HEADING */}
            <Fade up>
              <h1>
                Sell Your <span className="light_word">Old Coins</span>, Notes
                Stamps & Antiques in <mark>Minute</mark>
              </h1>
            </Fade>
            {/* PARAGRAPH */}
            <Fade up duration={1000}>
              <p>
                Transform your Old Coins into money using our quick, secure and
                free assistance. With Vintage Money Cow.
              </p>
            </Fade>
            <OptinsForm />
            <div className="optins_intru">
              <img src={arrDir} alt="" />
              <Fade up duration={1000}>
                <span>
                  It's easy to get started, just select your entity type and we
                  will email you the necessary steps or you can{' '}
                  <a href="#">contact us</a>
                </span>
              </Fade>
            </div>
          </div>
          <div className="right_section">
            <Fade>
              <img src={pat1} alt="pattern" className="pat1" />
            </Fade>
            <Fade>
              <img src={pat2} alt="pattern" className="pat2" />
            </Fade>
            <Fade duration={2000} delay={1000}>
              <div className="review_box">
                <img
                  src={review}
                  style={{
                    transform: `translateY(-${this.state.offsetY * 0.1}px)`,
                    transition: 'all 1s ease',
                    position: 'absolute',
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                  }}
                  alt="review"
                />
              </div>
            </Fade>
            <Fade duration={2000} delay={2000}>
              <div className="review_box2">
                <img
                  src={review2}
                  style={{
                    transform: `translateY(-${this.state.offsetY * 0.1}px)`,
                    transition: 'all 1s ease',
                    position: 'absolute',
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                  }}
                  alt="review"
                />
              </div>
            </Fade>
            <Fade duration={2000} delay={3000}>
              <div className="review_box3">
                <img
                  src={review3}
                  style={{
                    transform: `translateY(${this.state.offsetY * 0.2}px)`,
                    transition: 'all 1s ease',
                    position: 'absolute',
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                  }}
                  alt="review"
                />
              </div>
            </Fade>
            <img src={background} alt="backgound" class="background" />
            <Fade right>
              <div className="banner">
                <img
                  src={BanImg}
                  alt=""
                  style={{
                    transform: `translateY(${this.state.offsetY * 0.1}px)`,
                    transition: 'all 1s ease',
                  }}
                />
              </div>
            </Fade>
          </div>
        </section>
      </div>
    );
  }
}
