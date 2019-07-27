import React from "react";
import PropTypes from "prop-types";

function Session(props) {
  let { display, increment, decrement } = props;
  return (
    <div className="session-length-box">
      <button id="session-increment" onClick={increment}>
        +
      </button>
      <div id="session-length">{display}</div>
      <button id="session-decrement" onClick={decrement}>
        -
      </button>
      <div id="session-label">Session Length</div>
    </div>
  );
}

Session.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  display: PropTypes.number.isRequired
};

export default Session;
