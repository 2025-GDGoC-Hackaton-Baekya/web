import React from "react";
import "../scss/Welcome.scss";
import { Link } from "react-router-dom";

type Props = {
  value: string,
  color: string
}

function Welcome(props: Props) {
  const msgStyle = {
    color: props.color,
    margin: "0.5em",
    fontSize: "2em"
  };

  return (
    <div className="welcome">
      <div className="welcome-content">
        <div style={msgStyle}>
          {props.value}
        </div>
        <Link to="/resume">
        <button className="start-button">시작하기</button>
        </Link>
      </div>
    </div>
  )
}

export default Welcome;
