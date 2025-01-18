import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../modal/modal";

// Styled Components
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
  background-color: white;
  color: black;
  font-weight: bold;
  flex: 1;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  transition: color 0.3s, transform 0.2s;

  &:hover {
    color: red;
    transform: scale(1.05);
  }

  &:active {
    color: lightgray;
    transform: scale(0.95);
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

      <Button onClick={openModal}>경력 추가</Button>

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
