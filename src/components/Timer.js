import React, { Component } from "react";
import Time from "./Time";

export class Timer extends Component {
  render() {
    let { initialize, display, status, startTimer, active } = this.props;
    return (
      <div className="time-box">
        <div id="timer-label">{"session" === status ? "session" : "Break"}</div>
        <div id="time-left">
          <Time time={display} />
        </div>
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

export default Timer;
