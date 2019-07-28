import React, { Component } from "react";
import "./App.css";
import "./styles/main.css";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import Break from "./components/Break";
import Session from "./components/Session";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTime: 25,
      breakTime: 5,
      time: 25 * 60,
      active: false, //toggle key between start(true) or pause(false)
      status: false // toggle between session(true) or Break(false)
    };

    this.initialize = this.initialize.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  //Reset btn
  initialize() {
    clearInterval(this.counter);
    this.audio.pause();
    this.audio.currentTime = 0;
    this.setState({
      sessionTime: 25,
      breakTime: 5,
      time: 25 * 60,
      active: false,
      status: false
    });
  }

  startTimer(e) {
    //Start mode active is true
    if (!this.state.active) {
      this.counter = setInterval(this.countDown, 1000);
    }

    //Pause mode acitve is false
    if (this.state.active) {
      clearInterval(this.counter);
      this.audio.pause();
      this.setState({
        active: false
      });
    }
  }

  // Timer main operation
  //switching between Session and Break
  countDown() {
    //start decrementing time duration
    //active true: change the label of btn from start to pause
    this.setState({
      time: this.state.time - 1,
      active: true
    });

    //keep track of session and break
    if (this.state.time < 0) {
      clearInterval(this.counter);
      this.audio.play();
      this.audio.currentTime = 0;
      let newState;

      //if countdown time is zero. switch time to Break Length
      if (!this.state.status) {
        newState = {
          time: this.state.breakTime * 60,
          active: false,
          status: true
        };
      } else {
        //if countdown time is not zero. keep time as session length

        newState = {
          time: this.state.sessionTime * 60,
          status: false,
          active: false
        };
      }
      this.setState(newState);
      this.startTimer();
    }
  }

  increment(e) {
    let { breakTime, sessionTime } = this.state;
    if (e.target.id === "break-increment" && breakTime !== 60) {
      this.setState({ breakTime: breakTime + 1 });
    }

    if (e.target.id === "session-increment" && sessionTime !== 60) {
      this.setState({
        sessionTime: sessionTime + 1,
        time: sessionTime * 60 + 60
      });
    }
  }

  decrement(e) {
    let { breakTime, sessionTime } = this.state;
    if (e.target.id === "break-decrement" && breakTime !== 1) {
      this.setState({ breakTime: breakTime - 1 });
    }

    if (e.target.id === "session-decrement" && sessionTime !== 1) {
      this.setState({
        sessionTime: sessionTime - 1,
        time: sessionTime * 60 - 60
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Pomodoro Clock</h1>
        <div className="pgt-timer">
          <Timer
            status={this.state.status}
            display={this.state.time}
            initialize={this.initialize}
            startTimer={this.startTimer}
            active={this.state.active}
            breakTime={this.state.breakTime}
            sessionTime={this.state.sessionTime}
          />
        </div>
        <div className="pgt-control-btn">
          <div className="pgt-breaker">
            <Break
              display={this.state.breakTime}
              increment={this.increment}
              decrement={this.decrement}
            />
          </div>

          <div className="pgt-session">
            <Session
              display={this.state.sessionTime}
              increment={this.increment}
              decrement={this.decrement}
            />
          </div>
        </div>

        <audio
          id="beep"
          src="red-alert.mp3"
          ref={ref => (this.audio = ref)}
        ></audio>
        <Footer />
      </div>
    );
  }
}

export default App;
