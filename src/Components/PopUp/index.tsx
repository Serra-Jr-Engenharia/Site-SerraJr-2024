import React from "react";
import { 
  PopupContainer, 
  PopupContent, 
  CloseButton, 
  Button, 
  Title, 
  Image, 
  Info, 
  Members, 
  MembersTitle, 
  MembersList, 
  Member, 
  InfoContent, 
  Linkedin, 
  LinkedinImg 
} from "./style";
import linkedin from "../../Assets/Linkedin.svg";

interface MemberInfo {
  name: string;
  link: string;
}

interface PopupProps {
  title: string;
  img: string;
  info: string;
  link: string;
  members: MemberInfo[];  
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose, title, img, info, members, link }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>{title}</Title>
        
        {img && <Image src={img} alt={title} />}
        
        {info && (
          <InfoContent>
            <Info>{info}</Info>
          </InfoContent>
        )} 

        {members.length > 0 && (
          <Members>
            <MembersTitle>Membros Envolvidos:</MembersTitle>
            <MembersList>
              {members.map((member, index) => (
                <Member key={index}>
                  <Linkedin href={member.link} target="_blank" rel="noopener noreferrer">
                    <LinkedinImg src={linkedin} alt="LinkedIn" />
                  </Linkedin>
                  {member.name}
                </Member>
              ))}
            </MembersList>
          </Members>
        )}

        <Button onClick={() => window.open(link, "_blank")}>
          Acesse o projeto
        </Button>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
