import React, { Component } from "react";
import "./App.css";
import n2d from "./n2d.png";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import Break from "./components/Break";
import Session from "./components/Session";
import { throwStatement } from "@babel/types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 5,
      breakTime: 4,
      time: 3,
      active: false,
      status: "session"
    };

    this.initialize = this.initialize.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  //Reset btn
  initialize() {
    clearInterval(this.counter);
    this.setState({
      sessionTime: 25,
      breakTime: 5,
      time: 25 * 60,
      active: false,
      status: "session"
    });
  }

  startTimer(e) {
    //start mode active === true
    if (!this.state.active) {
      this.counter = setInterval(this.countDown, 1000);
    } //end of if
    //pause mode acitve == false
    if (this.state.active) {
      clearInterval(this.counter);
      this.setState({
        active: false
      });
    }
  }
  //countdown
  countDown() {
    this.setState(prevState => ({
      time: prevState.time - 1,
      active: true
    }));
  }
  componentDidUpdate(prevProps) {
    if (this.state.time === -1 && this.state.status === "session") {
      this.setState({ time: this.state.breakTime, status: "break" });
      this.audio.play();
    }
    if (this.state.time === -1 && this.state.status === "break") {
      this.setState({
        time: this.state.sessionTime,
        status: "session"
      });
      this.audio.play();
    }
  }

  increment() {}
  render() {
    return (
      <div className="App">
        <Timer
          status={this.state.status}
          display={this.state.time}
          initialize={this.initialize}
          startTimer={this.startTimer}
          active={this.state.active}
        />
        <Break display={this.state.breakTime} />
        <Session display={this.state.sessionTime} />
        <audio
          id="beep"
          src="https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3"
          ref={ref => (this.audio = ref)}
        ></audio>

        <Footer />
      </div>
    );
  }
}

export default App;
