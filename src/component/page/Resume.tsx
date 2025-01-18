import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Modal from "../modal/modal.tsx";

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: royalblue;
  color: white;
  font-weight: bold;
  flex: 1;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #003d80;
    transform: scale(0.95);
  }
`;

const AddButton = styled(Button)`
  width: auto;
  padding: 3px 30px;
  background-color: royalblue;
  border-radius: 10px;
  font-size: 18px;

  &:hover {
    background-color: rgb(49, 147, 251);
  }

  &:active {
    background-color: rgb(6, 126, 255);
  }
`;

const ModalContent = styled.div`
  text-align: center;
  font-size: 18px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Resume: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [workData, setWorkData] = useState<string | null>(null);
  const [isWorkFetched, setIsWorkFetched] = useState<boolean>(false); 

  const openModal = (): void => {
    setIsModalOpen(true);
    setIsWorkFetched(false); 
    setWorkData(null);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setWorkData(null);
  };

  const handleYesClick = async (): Promise<void> => {
    try {
      const response = await axios.get("http://3.34.233.19/chat/make/userId=1");
      const { work } = response.data;

      setWorkData(work || null);
      setIsWorkFetched(true); 

      if (!work) {
        alert("경력을 성공적으로 불러왔습니다.");
      } else {
        alert("경력을 성공적으로 불러왔습니다.");
      }
    } catch (error) {
      alert("경력을 성공적으로 불러왔습니다.");
    }
  };

  const handleNoClick = (): void => {
    alert("경력 불러오기를 취소합니다.");
    closeModal();
  };

  return (
    <div>
      <h1>Resume</h1>
      <p>소개 화면 입니다.</p>

      <AddButton onClick={openModal}>경력 추가</AddButton>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalContent={
          <ModalContent>
            <p>경력을 불러오시겠습니까?</p>
            <ButtonContainer>
              <Button onClick={handleYesClick}>네</Button>
              <Button onClick={handleNoClick}>아니요</Button>
            </ButtonContainer>

            {isWorkFetched && (
              workData ? (
                <div style={{ marginTop: "20px", textAlign: "left", width: "80%" }}>
                  <h3>Work</h3>
                  <p>{workData}</p>
                </div>
              ) : (
                <p style={{ marginTop: "20px", color: "gray" }}>
                  아직 경력을 쌓지 않으셨네요. 경력을 입력해주세요.
                </p>
              )
            )}
          </ModalContent>
        }
      />
    </div>
  );
};

export default Resume;