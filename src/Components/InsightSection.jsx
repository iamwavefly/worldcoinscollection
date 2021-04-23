import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { FiTrendingUp, FiUserCheck, FiDollarSign } from 'react-icons/fi';

import './styles/insightSection.css';

import globalBall from '../images/global_ball.svg';
import img from '../images/banner.png';
import pat from '../images/icons/pat2.svg';
import review from '../images/icons/review4.svg';
import review2 from '../images/icons/review5.svg';

export default class InsightSection extends Component {
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
  handleScroll() {
    let offsetY = window.pageYOffset;
    this.setState({
      offsetY: offsetY,
    });
    console.log(this.state.offsetY);
  }
  render() {
    return (
      <div className="insight_bg">
        <div className="insight_container">
          <Fade left>
            <div className="ScrollBall">
              <img
                src={globalBall}
                style={{
                  transform: `translate(-50%, -50%) rotate(${
                    this.state.offsetY * 0.1 - 1900
                  }deg)`,
                  transition: 'all 1s ease',
                }}
                alt=""
                srcset=""
              />
            </div>
          </Fade>
          <div className="content1">
            <Fade up>
              <img src={pat} alt="" />
            </Fade>
            <Fade left>
              <div className="insight_main_img">
                <img
                  src={img}
                  className="insight_img"
                  // style={{
                  //   transform: `translateY(${
                  //     this.state.offsetY * 0.1 - 140
                  //   }px)`,
                  //   transition: 'all 1s ease',
                  // }}
                  alt="insight img"
                />
              </div>
            </Fade>
            <Fade delay={1000}>
              <div className="insight_review">
                <img
                  src={review}
                  // style={{
                  //   transform: `translateY(${
                  //     this.state.offsetY * 0.1 - 140
                  //   }px)`,
                  //   transition: 'all 1s ease',
                  //   position: 'absolute',
                  //   objectFit: 'contain',
                  //   width: '100%',
                  //   height: '100%',
                  // }}
                  alt="Insight Review"
                />
              </div>
            </Fade>

            <Fade delay={2000}>
              <div className="insight_review2">
                <img
                  src={review2}
                  // style={{
                  //   transform: `translateY(-${
                  //     this.state.offsetY * 0.1 - 140
                  //   }px)`,
                  //   transition: 'all 1s ease',
                  //   position: 'absolute',
                  //   objectFit: 'contain',
                  //   width: '100%',
                  //   height: '100%',
                  // }}
                  alt="Insight Review"
                />
              </div>
            </Fade>
          </div>
          <div className="content2">
            <Fade up>
              <h3 className="sub_header">What We Offer</h3>
            </Fade>
            <Fade up>
              <h2 class="header">Make Money Out Of Your Old Stuffs</h2>
            </Fade>
            <div className="cards">
              <Fade up>
                <div className="card1">
                  <div className="card_icon">
                    <FiTrendingUp className="icon" />
                  </div>
                  <div className="card_content">
                    <h3>Passive Income Stream</h3>
                    <p>
                      If you get old coins or old notes, you can turn them to
                      money.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="card2">
                  <div className="card_icon">
                    <FiUserCheck className="icon" />
                  </div>
                  <div className="card_content">
                    <h3>Most Reliable</h3>
                    <p>
                      Once you very your profile, you can get paid within
                      48hours
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="card3">
                  <div className="card_icon">
                    <FiDollarSign className="icon" />
                  </div>
                  <div className="card_content">
                    <h3>Instant Payment Tranfer</h3>
                    <p>
                      Get paid as soon as your products as been confirmed by our
                      autorized agent
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <Fade up>
              <a href="#">
                Start Trading <span>&rarr;</span>
              </a>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
