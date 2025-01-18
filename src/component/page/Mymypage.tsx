import React from "react";
import { useNavigate } from 'react-router-dom';
import { GoChevronRight } from "react-icons/go";
import "../scss/Mypage.scss";

const Mymypage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="mypage">
      <div className="title">My Page</div>
      <div
        className="navigation"
        onClick={() => handleNavigation('/Profile')}
      >
        <div className="text">내 정보</div>
        <GoChevronRight className="icon" />
      </div>
      <div
        className="navigation"
        onClick={() => handleNavigation('/Resume')}
      >
        <div className="text">내 이력서</div>
        <GoChevronRight className="icon" />
    
      </div>
    </div>
  );
};

export default Mymypage;