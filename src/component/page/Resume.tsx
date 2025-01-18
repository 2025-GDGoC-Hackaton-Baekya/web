import React, { useState } from "react";
import styled from "styled-components";
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
    background-color:rgb(6, 126, 255);
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

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleYesClick = (): void => {
    alert("경력을 불러옵니다.");
    closeModal();
  };

  const handleNoClick = (): void => {
    alert("경력 불러오기를 취소합니다.");
    closeModal();
  };

  return (
    <div>
      <h1>Resume</h1>
      <p>소개 화면 입니다.</p>

      {/* 경력 추가 버튼 */}
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
          </ModalContent>
        }
      />
    </div>
  );
};

export default Resume;
