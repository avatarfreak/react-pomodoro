import React, { Component } from "react";
import "./App.css";
import n2d from "./n2d.png";
import Footer from "./components/Footer";
import Time from "./components/Time";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      active:false
    };
  }

  render() {
    return (
      <div>
          <Timer />
          <Break />
          <Session />
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
