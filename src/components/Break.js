import React, { Component } from "react";
import PropTypes from "prop-types";

export class Break extends Component {
  render() {
    let { display, increment, decrement } = this.props;
    return (
      <div className="break-length-box">
        <button id="break-increment" onClick={increment}>
          +
        </button>
        <div id="break-length">{display}</div>
        <button id="break-decrement" onClick={decrement}>
          -
        </button>
        <div id="break-label">Break Length</div>
      </div>
    );
  }
}
Break.prototypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired
};

export default Break;
