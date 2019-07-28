import React, { Component } from "react";
import PropTypes from "prop-types";
import Time from "./Time";
export class Timer extends Component {
  render() {
    let {
      initialize,
      display,
      status,
      startTimer,
      active,
      breakTime,
      sessionTime
    } = this.props;

    return (
      <div className="time-box">
        <div id="timer-label">
          <h3>{!status ? "Happy Working" : "Take A Break"}</h3>
        </div>

        <Time
          active={active}
          status={status}
          sessionTime={sessionTime}
          breakTime={breakTime}
          timeRemaining={display}
          reset={initialize}
        />

        <div className="btn-group">
          <button id="reset" onClick={initialize}>
            <span>&#8634;</span>
          </button>
          <button id="start_stop" onClick={startTimer}>
            {
              (active = !active ? (
                <span>&#9658;</span>
              ) : (
                <span>&#10074;&#10074;</span>
              ))
            }
          </button>
        </div>
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
