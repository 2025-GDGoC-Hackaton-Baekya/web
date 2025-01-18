import React from "react";
import { Link } from "react-router-dom";

type Props = {
  color: string,
  margin: string,
  fontSize: string,
}

function Gohome(props: Props) {
  const msgStyle = {
    color: props.color,
    margin: props.margin,
    fontSize: props.fontSize,
  };

  return (
    <div className="welcome">
      <div className="welcome-content">
        <div style={msgStyle}>
        </div>
        <Link to="/Home">
        <button className="start-button">홈으로</button>
        </Link>
      </div>
    </div>
  )
}

export default Gohome;
