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
  Card,
  CarouselButton,
  CarouselWrapper,
  CardContainer,
  Indicators, 
  Indicator
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
import setaEsquerda from "../../Assets/esq.png"
import setaDireita from "../../Assets/dir.png"

const ITEMS_PER_PAGE = 6;

import { projectsData, Project } from "./projectsData";

const Computacao: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setExpandedCard(index === expandedCard ? null : index);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
      setStartIndex((prevIndex) =>
          prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
      );
  };

  const selectedStyle = "optionA";

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

      <CarouselWrapper>
                <CarouselButton onClick={handlePrev}><img src={setaEsquerda} alt="Anterior" /></CarouselButton>
                
                <CardContainer>
                    <Card>
                        <CardContent>
                            {projectsData
                                .slice(startIndex, startIndex + ITEMS_PER_PAGE)
                                .concat(projectsData.slice(0, Math.max(0, ITEMS_PER_PAGE - (projectsData.length - startIndex))))
                                .map((project, index) => (
                                    <CardP
                                        key={startIndex + index}
                                        title={project.title}
                                        img={project.img}
                                        description={project.description}
                                        link={project.link}
                                        info={project.info}
                                        members={project.members}
                                        isExpanded={expandedCard === startIndex + index}
                                        onClick={() => handleCardClick(startIndex + index)}
                                        styleChoice={selectedStyle}
                                    />
                                ))}
                        </CardContent>
                    </Card>
                </CardContainer>

                <CarouselButton onClick={handleNext}> <img src={setaDireita} alt="Próximo" /></CarouselButton>
            </CarouselWrapper>

            <Indicators>
                {projectsData.map((_, index) => (
                    <Indicator key={index} active={index === startIndex} />
                ))}
            </Indicators>

      <ContactSection>
        <ContactText>Quer colocar seu projeto em prática?</ContactText>
        <ContactButton href="/contatos">Entre em Contato</ContactButton>
      </ContactSection>

      <Slider />
    </>
  );
};

export default Computacao;
