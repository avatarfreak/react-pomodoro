import React, { Component } from "react";
import "./App.css";
import n2d from "./n2d.png";
import Footer from "./components/Footer";
import Time from "./components/Time";
import Timer from "./components/Timer"
import Break from "./components/Break"
import Session from "./components/Session"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      time: 25 * 60,
      active:false,
      status: false,
    };
  }

  render() {
    return (
      <div className="App">
          <Timer 
          status={this.state.status}
          display={this.state.time}/>
          <Break display={this.state.breakTime} />
          <Session display={this.state.sessionTime}/>
        <audio
          id="beep"
          src="https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3"
          ref={ref => (this.audio = ref)}
        ></audio>
      </div>
    );
  }
}

export default App;
