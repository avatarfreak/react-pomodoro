import React, { Component } from "react";
import { isWhiteSpaceLike } from "typescript";
import { NONAME } from "dns";

export class Footer extends Component {
  render() {
    const footer = {
      color: "white",
      fontFamily: "cursive",
      letterSpacing: "2px",
      backgroundColor: "#333",
      fontSize: "13px",
      height:"20px",
    };
    return (
      <div className="footer" style={footer}>
        <p>
          Designed and Developed by{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/avatarfreak"
          >
            {" "}
            Dave.{" "}
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
