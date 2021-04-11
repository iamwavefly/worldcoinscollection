import React, { Component } from 'react';
import axios from 'axios';
import './styles/noticeBoard.css';

export default class NoticeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: '',
    };
  }
  componentDidMount() {
    axios
      .get(
        'https://ipgeolocation.abstractapi.com/v1/?api_key=24a90d2d25d846e288c329787274ba43'
      )
      .then((data) => {
        const location = data.data;
        this.setState({
          userLocation: location,
        });
      });

    this.state.userLocation && console.log(this.state.userLocation);
  }
  render() {
    return (
      this.state.userLocation && (
        <div className="notice_board_container">
          <p className="notice">
            <span>Notice</span> We are now setting up a new pickup station at{' '}
            {this.state.userLocation.city}
          </p>
        </div>
      )
    );
  }
}
