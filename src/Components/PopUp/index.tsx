import React from "react";
import { PopupContainer, PopupContent, CloseButton } from "./style";

interface PopupProps {
  onClose: () => void;
  content: string;
}

const Popup: React.FC<PopupProps> = ({ onClose, content }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <p>{content}</p>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
