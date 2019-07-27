import React, { Component } from "react";
import PropTypes from "prop-types";

export class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialOffset: 679
    };
  }

  componentDidUpdate() {
    let { sessionTime, breakTime, timeRemaining, status } = this.props;
    let { initialOffset } = this.state;
    let circum;

    if (!status && timeRemaining > -1) {
      sessionTime = sessionTime * 60;
      circum = (initialOffset / sessionTime) * timeRemaining;
    } else {
      breakTime = breakTime * 60;
      circum = (initialOffset / breakTime) * timeRemaining;
    }

    document
      .getElementById("circle_animation")
      .setAttributeNS(null, "stroke-dashoffset", circum);
  }

  displayTime() {
    let { timeRemaining } = this.props;
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = Math.floor(timeRemaining % 60);

    let timeDisplay = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    return timeDisplay;
  }
  render() {
    return (
      <div className="pie" id="pie">
        <div className="block">
          <svg>
            <circle id="circle_animation" r="108" cx="110" cy="110" />
          </svg>
          <span id="time-left">{this.displayTime()}</span>
        </div>
      </div>
    );
  }
}
Time.prototypes = {
  sessionTime: PropTypes.number.isRequired,
  breakTime: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
  initialOffset: PropTypes.number.isRequired
};
export default Time;
