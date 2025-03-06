/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Slider from "../../Components/Slider";
import Banner from "./Components/Banner/index";
import {
  Title,
  TitleContainer,
  CardContent,
  CardSpecialContainer,
  CardSpecial,
  TechContainer,
  TechIcon,
  ContactSection,
  ContactText,
  ContactButton,
  StyledHr,
} from "./style";
import CardP from "../../Components/CardP";
import setinhal from "../../Assets/Computacao/setinhal.png";
import setinhar from "../../Assets/Computacao/setinhar.png";
import http from "../../Assets/Computacao/http.png";
import notebook from "../../Assets/Computacao/notebook.png";
import HtmlIcon from "../../Assets/Computacao/HTML.svg";
import CssIcon from "../../Assets/Computacao/CSS.svg";
import JsIcon from "../../Assets/Computacao/JAVASCRIPT.svg";
import TsIcon from "../../Assets/Computacao/TYPESCRIPT.svg";
import ReactIcon from "../../Assets/Computacao/REACT.svg";

import { projectsData, Project } from "./projectsData";

const Computacao: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCard(index === expandedCard ? null : index);
  };

  const cardsData2 = [
    {
      title: "Desenvolvimento de Websites",
      img: http,
      description:
        "Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu negócio. Utilizamos das ferramentas mais modernas do mercado para criar uma solução única que irá alavancar a visibilidade do seu produto!",
    },
    {
      title: "Desenvolvimento de Sistemas Web",
      img: notebook,
      description:
        "Com auxílio das mais completas linguagens de programação, fornecemos aplicativos e sistemas próprios para a sua empresa que irão acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu negócio.",
    },
  ];

  return (
    <>
      <Banner />

      <TitleContainer>
        <Title>Carta de serviços</Title>
        <StyledHr />
      </TitleContainer>

      {/* Card isolado centralizado na tela */}
      <CardSpecialContainer>
        {cardsData2.map((card, index) => (
          <CardSpecial key={index}>
            <img src={card.img} alt={card.title} />
            <p className="title-card">{card.title}</p>
            <p className="description-card">{card.description}</p>
            <img className="setinha" src={setinhal} alt="Seta esquerda" />
            <img className="setinha" src={setinhar} alt="Seta direita" />
          </CardSpecial>
        ))}
      </CardSpecialContainer>

      <TechContainer>
        <TechIcon src={HtmlIcon} alt="HTML5" />
        <TechIcon src={CssIcon} alt="CSS3" />
        <TechIcon src={JsIcon} alt="JavaScript" />
        <TechIcon src={TsIcon} alt="TypeScript" />
        <TechIcon src={ReactIcon} alt="React" />
      </TechContainer>

      <CardContent>
        {projectsData.map((project: Project, index: number) => (
          <CardP
            key={index}
            title={project.title}
            img={project.img}
            description={project.description}
            link={project.link}
            info={project.info}
            members={project.members}
            isExpanded={expandedCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </CardContent>

      <ContactSection>
        <ContactText>Quer colocar seu projeto em prática?</ContactText>
        <ContactButton href="/contatos">Entre em Contato</ContactButton>
      </ContactSection>

      <Slider />
    </>
  );
};

export default Computacao;
