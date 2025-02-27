import { useState } from 'react';
import Slider from '../../Components/Slider';
import Banner from './Components/Banner/index';
import { Title, TitleContainer, CardContent, CardSpecialContainer, CardSpecial} from './style';
import CardP from "../../Components/CardP";
import setinhal from "../../Assets/Computacao/setinhal.png";
import setinhar from "../../Assets/Computacao/setinhar.png";
import http from "../../Assets/Computacao/http.png";
import notebook from "../../Assets/Computacao/notebook.png";
// import HtmlIcon from "../../../../Assets/html.svg"
// import CssIcon from "../../../../Assets/css.svg"
// import JsIcon from "../../../../Assets/js.svg"
// import TsIcon from "../../../../Assets/ts.svg"
// import ReactIcon from "../../../../Assets/react.svg"

import { projectsData, Project } from "./projectsData";


const Computacao: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (index) => {
        setExpandedCard(index === expandedCard ? null : index);
    };

    const selectedStyle = "optionA";

    const cardsData2 = [
        { title: "Desenvolvimento de Websites", img: http, description: "Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu negócio. Utilizamos das ferramentas mais modernas do mercado para criar uma solução única que irá alavancar a visibilidade do seu produto!" },
        { title: "Desenvolvimento de Sistemas Web", img: notebook, description: "Com auxílio das mais completas linguagens de programação, fornecemos aplicativos e sistemas próprios para a sua empresa que irão acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu negócio." },
    ];
        // <TechContainer>
        //     <TechIcon src={HtmlIcon} alt="HTML5" />
        //     <TechIcon src={CssIcon} alt="CSS3" />
        //     <TechIcon src={JsIcon} alt="JavaScript" />
        //     <TechIcon src={TsIcon} alt="TypeScript" />
        //     <TechIcon src={ReactIcon} alt="React" />
        // </TechContainer>

    return (
        <>
        <Banner />
        <div style={{ height: '30vh', width: '100%' }}>
            <TitleContainer>
            <Title>
                Carta de serviços
            </Title>
            <hr />
            </TitleContainer>
        </div>

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
                styleChoice={selectedStyle}
            />
        ))}
        </CardContent>

        <Slider />
        </>

        
    );

// <ContactSection>
//     <ContactText>Quer colocar seu projeto em prática?</ContactText>
//     <Button href="">Entre em Contato</Button>
// </ContactSection>
};

export default Computacao;
