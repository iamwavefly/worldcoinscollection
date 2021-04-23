import React, { Component } from 'react';

import team1 from '../images/banner.png';

import './styles/team.css';

export default class Team extends Component {
  render() {
    return (
      <div className="teamContainer">
        <div className="teamHeader">
          <h3 className="sub_header">WORLDCC Team</h3>
          <h2 className="title">Meet Our Amazing Team</h2>
        </div>
        <div className="teamContent">
          <div className="team1">
            <div className="teamAvatar">
              <img src={team1} alt="team 1" />
            </div>
            <div className="teamDetails">
              <h3>Male Walter</h3>
              <span>male_walter@worldcoinscollection.com</span>
            </div>
            <div className="teamDesc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, vitae?
              </p>
            </div>
            <div className="view_btn"></div>
          </div>
          <div className="team2">
            <div className="teamDetails"></div>
          </div>
          <div className="team3"></div>
          <div className="team4"></div>
        </div>
      </div>
    );
  }
}
