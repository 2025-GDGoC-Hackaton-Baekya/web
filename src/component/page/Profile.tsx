import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import "../scss/Profile.scss";

const Profile = () => {
    const { id } = useParams(); 
    const [profile, setProfile] = useState({
        id: "",
        name: "",
        gender: "MALE",
        age: "",
        birth: "",
        phone: "",
        email: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://3.34.233.19/api/users/1`); 
                setProfile(response.data);
                setLoading(false);
            } catch (error) {
                console.error("프로필 데이터를 불러오는 중 오류 발생:", error);
                setLoading(false);
            }
        };
        fetchProfile();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://3.34.233.19/api/users/1`, profile); 
            console.log("수정 성공:", response.data);
            alert("프로필이 성공적으로 저장되었습니다!");
        } catch (error) {
            console.error("수정 실패:", error);
            alert("프로필 수정 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    if (loading) {
        return <div className="loading">데이터를 불러오는 중...</div>;
    }

    return (
        <div className="profile-wrap">
            <div className="profile-container">
                <h2>프로필 관리</h2>
                <div className="profile-content">
                    <div className="profile-input">
                        <label>이름</label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            placeholder="이름을 입력하세요"
                        />
                    </div>

                    <div className="profile-input">
                        <label>성별</label>
                        <select
                            name="gender"
                            value={profile.gender}
                            onChange={handleChange}
                        >
                            <option value="MALE">남성</option>
                            <option value="FEMALE">여성</option>
                        </select>
                    </div>

                    <div className="profile-input">
                        <label>나이</label>
                        <input
                            type="number"
                            name="age"
                            value={profile.age}
                            onChange={handleChange}
                            placeholder="나이를 입력하세요"
                        />
                    </div>

                    <div className="profile-input">
                        <label>생년월일</label>
                        <input
                            type="date"
                            name="birth"
                            value={profile.birth}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="profile-input">
                        <label>전화번호</label>
                        <input
                            type="tel"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            placeholder="전화번호를 입력하세요"
                        />
                    </div>

                    <div className="profile-input">
                        <label>이메일</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            placeholder="이메일을 입력하세요"
                        />
                    </div>

                    <button className="profile-submit" onClick={handleSubmit}>
                        저장하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;