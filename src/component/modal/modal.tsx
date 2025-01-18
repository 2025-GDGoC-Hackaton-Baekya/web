import React from "react";
import styled from "styled-components";

type ModalProps = {
  isOpen: boolean; 
  onClose: () => void; 
  modalContent: React.ReactNode; 
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContentWrapper = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalContent }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContentWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>x</CloseButton>
        {modalContent}
      </ModalContentWrapper>
    </ModalOverlay>
  );
};

export default Modal;
