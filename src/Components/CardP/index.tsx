import React, { useState } from "react";
import { Container, Image, Title, Button, Description, TopRightImage, SaibaMais } from "./style";
import Popup from "../PopUp"; 
import setahorizontal from "../../Assets/SetaDiagonal.svg"
import setasb from "../../Assets/SetaSaibaMais.png"

interface CardProps {
  title: string;
  img?: string;
  description?: string;
  link: string; 
  isExpanded: boolean;
  onClick: () => void;
}

const CardP: React.FC<CardProps> = ({ title, img, description, link, isExpanded, onClick }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <Container isExpanded={isExpanded} onClick={onClick}>
      {img && <Image src={img} alt={title} isExpanded={isExpanded} />}
      <Title isExpanded={isExpanded}>{title}</Title>
      {isExpanded && (
        <>
          <Description isExpanded={isExpanded}>{description}</Description>
          <Button isExpanded={isExpanded} onClick={handlePopupOpen}>
            Saiba Mais <SaibaMais src={setasb}/>
          </Button>
          <TopRightImage
            src={setahorizontal} 
            alt="Abrir Link"
            onClick={(e) => {
              e.stopPropagation();
              window.open(link, "_blank"); 
            }}
          />
        </>
      )}
      {showPopup && (
        <Popup
          onClose={handlePopupClose}
          content={`Detalhes sobre: ${title}`}
        />
      )}
    </Container>
  );
};

export default CardP;
