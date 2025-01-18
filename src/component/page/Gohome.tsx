import React from "react";
import { Link } from "react-router-dom";
import { Value } from "sass";

type Props = {
  color: string,
  margin: string,
  fontSize: string,
  value: string
}

function Gohome(props: Props) {
  const msgStyle = {
    color: props.color,
    margin: props.margin,
    fontSize: props.fontSize,
    value: props.value  
  };

  return (
    <div className="welcome">
      <div className="welcome-content">
        <div style={msgStyle}>
          {props.value}
        </div>
        <Link to="/Home">
        <button className="start-button">홈으로</button>
        </Link>
      </div>
    </div>
  )
}

export default Gohome;
