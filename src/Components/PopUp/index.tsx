import React, { useEffect, useRef } from "react";
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
  LinkedinImg,
  ContentInner,
  Footer
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
  showLinkButton?: boolean;
}

const Popup: React.FC<PopupProps> = ({ onClose, title, img, info, members, link, showLinkButton }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    contentRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

    return (
    <PopupContainer
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={handleOverlayClick}
    >
      <PopupContent ref={contentRef} tabIndex={-1} onClick={(e) => e.stopPropagation()}>
        <CloseButton type="button" aria-label="Fechar" onClick={onClose}>×</CloseButton>

        {img && <Image src={img} alt={title} />}
        <Title id="popup-title">{title}</Title>

        <ContentInner>
          {info && (
            <InfoContent>
              <Info>{info}</Info>
            </InfoContent>
          )}

          {members?.length > 0 && (
            <Members>
              <MembersTitle>Membros Envolvidos</MembersTitle>
              <MembersList>
                {members.map((member, index) => (
                  <Member key={index}>
                    <Linkedin href={member.link} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`}>
                      <LinkedinImg src={linkedin} alt="" />
                    </Linkedin>
                    {member.name}
                  </Member>
                ))}
              </MembersList>
            </Members>
          )}
        </ContentInner>

        {showLinkButton !== false && (
          <Footer>
            <Button type="button" onClick={() => window.open(link, "_blank")}>
              Acesse o projeto
            </Button>
          </Footer>
        )}
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
