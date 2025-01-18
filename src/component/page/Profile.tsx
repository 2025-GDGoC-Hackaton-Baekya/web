import React from "react";
import { FaUserCircle } from "react-icons/fa"; 
import "../scss/Profile.scss";

const Profile = () => {
    return (
        <div className="profile-wrap">
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-img-wrap">
                        <FaUserCircle className="profile-icon" />
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                        />
                    </div>
                    <div className="profile-input-nic">
                        <input
                            className="profile-nickname"
                            type="text"
                        />
                    </div>
                    <div className="profile-input">
                        <label>성별</label>
                        <select
                            className="profile-gender"
                        >
                            <option value="MALE">남성</option>
                            <option value="FEMALE">여성</option>
                        </select>
                    </div>
                    <div className="profile-input">
                        <label>나이</label>
                        <input
                            className="profile-age"
                            type="number"
                        />
                    </div>
                    <button className="profile-submit">
                        저장하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;