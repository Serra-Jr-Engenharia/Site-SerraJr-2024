import { useState, useEffect } from "react";
import Banner from "./Components/Banner/index";
import Slider from "../../Components/Slider";
import { useNavigate } from "react-router-dom";
import {
  Title,
  TitleContainer,
  CardSpecialContainer,
  CardSpecial,
  ContactSection,
  ContactText,
  ContactButton,
  Card,
  CardContent,
  CarouselButton,
  CarouselWrapper,
  CardContainer,
  Indicators, 
  ResponsiveDiv,
  Indicator,
  Content,
  TechContainer,
  TechIcon
} from "../Mecanica/style"; // Importando os estilos
import image43 from "../../Assets/Mecanica/image 43.png";
import image44 from "../../Assets/Mecanica/image 44.png";
import image45 from "../../Assets/Mecanica/image 45.png";
import image46 from "../../Assets/Mecanica/image 46.png";
import seta1 from "../../Assets/Mecanica/seta laranja 4.png";
import seta2 from "../../Assets/Mecanica/seta laranja 4 - Copia.png";
import Python from '../../Assets/Mecanica/python.svg'
import SolidWorks from '../../Assets/Mecanica/solidworks.svg'
import Autocad from '../../Assets/Mecanica/autocad.svg'
import Arduino from '../../Assets/Mecanica/arduino.svg'

import CardP from "../../Components/CardP";
import setaEsquerda from "../../Assets/esq.png"
import setaDireita from "../../Assets/dir.png"

const cardsData3 = [
  {
    title: "Projeto e Manutenção de Equipamentos",
    img: image46,
    description:
      "Desenvolvemos equipamentos personalizados para atender às demandas dos clientes. Nosso time analisa a fundo as necessidades, passando por todas as etapas do projeto: estudo detalhado, desenho técnico, criação de protótipos, execução e manutenção.",
  },
  {
    title: "Desenho Técnico e Industrial",
    img: image43,
    description:
      "Com auxílio de programas CAD, a Serra Jr oferece serviços de desenhos de peças e maquinários, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necessárias nesse processo tão significante de um projeto.",
  },
  {
    title: "Prototipagem",
    img: image45,
    description:
      "Desenvolvemos equipamentos personalizados para atender às demandas dos clientes. Nosso time analisa a fundo as necessidades, passando por todas as etapas do projeto: estudo detalhado, desenho técnico, criação de protótipos, execução e manutenção.",
  },
  {
    title: "Projetos de Automação",
    img: image44,
    description:
      "Com base na demanda do cliente, criamos projetos de automação e otimização de tarefas, focando no melhor aproveitamento do tempo. Utilizamos estudos detalhados e protótipos com microcontroladores, CLPs e tecnologias da Indústria 4.0.",
  },
];

import { projectsData, Project } from "./projectsData";

const Mecanica: React.FC = () => {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

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

  const handleButtonClick = () => {
    navigate("/contatos");
  };


  const selectedStyle = "optionB";

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width <= 500) {
        setItemsPerPage(1);
      } else if (width <= 770) {
        setItemsPerPage(2);
      } else if (width <= 820) {
        setItemsPerPage(3);
      } else if (width <= 1030) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6); 
      }
    };
  
    updateItemsPerPage(); 
  
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return (
    <Content>
      <Banner />

        <TitleContainer>
          <Title>Carta de serviços</Title>
        </TitleContainer>
        
        <CardSpecialContainer>
          {cardsData3.map((card, index) => (
            <CardSpecial key={index}>
              <img src={card.img} alt={card.title} />
              <p className="title-card">{card.title}</p>
              <p className="description-card">{card.description}</p>
              <img className="setinha" src={seta1} alt="Seta esquerda" />
              <img className="setinha" src={seta2} alt="Seta direita" />
            </CardSpecial>
          ))}
        </CardSpecialContainer>

      <TechContainer>
        <TechIcon src={Python} alt="Python" />
        <TechIcon src={SolidWorks} alt="SolidWorks" />
        <TechIcon src={Autocad} alt="Autocad" />
        <TechIcon src={Arduino} alt="Arduino" />
      </TechContainer>



      <CarouselWrapper>
                      <CarouselButton onClick={handlePrev}><img src={setaEsquerda} alt="Anterior" /></CarouselButton>
                      
                      <CardContainer>
                          <Card>
                              <CardContent>
                              {projectsData
                                      .slice(startIndex, startIndex + itemsPerPage)
                                      .concat(
                                        projectsData.slice(
                                          0,
                                          Math.max(0, itemsPerPage - (projectsData.length - startIndex))
                                        )
                                      )
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
                                              showLinkButton={false} 
                                              showTopRightImage={false}
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
        <ContactButton onClick={handleButtonClick}>Entre em Contato</ContactButton>
      </ContactSection>
      <Slider />
    </Content>
  );
};

export default Mecanica;
