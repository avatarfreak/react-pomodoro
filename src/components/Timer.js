import React, { Component } from "react";
import Time from "./Time";
import PropTypes from "prop-types";

export class Timer extends Component {
  render() {
    let { initialize, display, status, startTimer, active } = this.props;
    return (
      <div className="time-box">
        <div id="timer-label">{!status ? "Happy Working" : "Take A Break"}</div>

        <Time time={display} />

        <button id="reset" onClick={initialize}>
          Reset
        </button>
        <button id="start_stop" onClick={startTimer}>
          {(active = !active ? "start" : "pause")}
        </button>
      </div>
    );
  }
}
Timer.prototypes = {
  status: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  display: PropTypes.number.isRequired,
  initialize: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired
};
export default Timer;
