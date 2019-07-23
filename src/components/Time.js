import React from "react";
import PropTypes from "prop-types";

function Time(props) {
  const minutes = Math.floor(props.time / 60);
  const seconds = Math.floor(props.time % 60);
  let timeDisplay = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  return <div id="time-left">{timeDisplay}</div>;
}

Time.propTypes = {
  time: PropTypes.number.isRequired
};

export default Time;
