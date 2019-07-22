import React, { Component } from "react";
import Time from "./Time";

export class Timer extends Component {
  render() {
    let { intialize, display, status, startTimer, active } = this.props;
    return (
      <div className="time-box">
        <div id="timer-label">{status}</div>
        <div id="time-left">
          <Time time={display} />
        </div>
        <button id="reset" onClick={intialize}>
          Reset
        </button>
        <button id="start_stop" onClick={startTimer}>
          {(active = !active ? "start" : "pause")}
        </button>
      </div>
    );
  }
}

export default Timer;
