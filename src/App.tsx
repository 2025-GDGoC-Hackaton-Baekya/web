import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Welcome from "./component/page/Welcome.tsx";
import Resume from "./component/page/Resume.tsx";
import Notice from "./component/page/Notice.tsx";
import Footer from "./component/page/Footer.tsx";
import Gohome from "./component/page/Gohome.tsx";
import Mymypage from "./component/page/Mymypage.tsx";
import Profile from "./component/page/Profile.tsx";
import Home from "./component/page/Home.tsx";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Welcome value="환영합니다!" color="blue" />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/gohome" element={<Gohome color="blue" margin="0.5em" fontSize="2"/>} />
          <Route path="/mypage" element={<Mymypage />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;