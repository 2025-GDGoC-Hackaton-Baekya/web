import React from "react";
import Message from "../Message.tsx";
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>첫 화면 입니다.</p>
      <Message value="Hello React!!" color="Red"/>
    </div>
  );
}
export default Home;
