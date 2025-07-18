import React, { useState } from "react";
import { Container, Image, Title, Button, Description, TopRightImage, SaibaMais } from "./style";
import Popup from "../PopUp"; 
import setahorizontal from "../../Assets/Computacao/SetaDiagonal.svg"
import setasb from "../../Assets/Computacao/SetaSaibaMais.png"

const styleOptions = {
  optionB: {
      gradientColor: "linear-gradient(to bottom, #FFBD9D, #BD3F01)",
      backgroundColor: "#BD3F01"
  },
  optionA: {
      gradientColor: "linear-gradient(to bottom, #04ADD7, #000D1A)",
      backgroundColor: "#000D1A"
  }
};

interface MemberInfo {
  name: string;
  link: string;
}

interface CardProps {
  title: string;
  img?: string;
  description?: string;
  link: string; 
  info?: string;
  isExpanded: boolean;
  onClick: () => void;
  members: MemberInfo[];
  gradientColor?: string;      
  backgroundColor?: string;
  styleChoice?: keyof typeof styleOptions;
  showLinkButton?: boolean;       
  showTopRightImage?: boolean;  
}

const CardP: React.FC<CardProps> = ({ title, img, description, link, info, members, isExpanded, onClick, styleChoice = "optionA", showLinkButton, showTopRightImage }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const selectedStyle = styleOptions[styleChoice];  

  return (
    <Container isExpanded={isExpanded} onClick={onClick} gradientColor={selectedStyle.gradientColor} 
    backgroundColor={selectedStyle.backgroundColor}>
      {img && <Image src={img} alt={title} isExpanded={isExpanded} />}
      <Title isExpanded={isExpanded}>{title}</Title>
      {isExpanded && (
        <>
          <Description isExpanded={isExpanded}>{description}</Description>
          <Button isExpanded={isExpanded} onClick={handlePopupOpen}>
            Saiba Mais <SaibaMais src={setasb}/>
          </Button>
          {isExpanded && showTopRightImage && (
            <TopRightImage
            src={setahorizontal} 
            alt="Abrir Link"
            onClick={(e) => {
              e.stopPropagation();
              window.open(link, "_blank"); 
            }}
          />
          )}
          
        </>
      )}
      {showPopup && (
        <Popup
          onClose={handlePopupClose}
          title={title}
          img={img || ""}
          info={info || ""}
          members={members}
          link={link}
          showLinkButton={showLinkButton}
        />
      )}   

      
    </Container>
  );
};

export default CardP;
