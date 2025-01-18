import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Div = styled.div`
  & a {
    margin-right: 20px;
  }
`;
function Header() {
  return (
    <Div>
      <Link to="/">Home</Link>
      <Link to="/notice">Notice</Link>
      <Link to="/about">About</Link>
      <hr />
    </Div>
  );
}
export default Header;
