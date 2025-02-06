import { useState } from 'react';
import Slider from './Components/Slider/index';
import Banner from './Components/Banner/index';
import { Title, TitleContainer, CardContent, CardSpecialContainer, CardSpecial } from './style';
import CardP from "../../Components/CardP";
import cervejelas from "../../Assets/Cervejelas.png";
import tmf from "../../Assets/TMF.png";
import ods from "../../Assets/odsquiz 1.png";
import prownovar from "../../Assets/prownovar.png";
import etar from "../../Assets/etarserra 2023.png";
import friburguense from "../../Assets/Friburguense.svg";
import setinhal from "../../Assets/setinhal.png";
import setinhar from "../../Assets/setinhar.png";
import http from "../../Assets/http.png";
import notebook from "../../Assets/notebook.png";

const Computacao: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (index) => {
        setExpandedCard(index === expandedCard ? null : index);
    };

    const cardsData = [
        { title: "Cervejelas", img: cervejelas, description: "Cervejelas 2023", link:"" },
        { title: "ODS Quiz", img: ods, description: "Hackathon Hack2030", link:"" },
        { title: "Projeto Friburguense", img: friburguense, description: "Friburguense Atlético Clube", link:"" },
        { title: "Projeto TMF", img: tmf, description: "Cervejelas 2023", link:"" },
        { title: "ETArserra 2022", img: etar, description: "Cervejelas 2023", link:"" },
        { title: "Prownovar", img: prownovar, description: "Cervejelas 2023", link:"https://serrajrengenharia.github.io/prownovar-project/" },
    ];

    const cardsData2 = [
        { title: "Desenvolvimento de Websites", img: http, description: "Desenvolvemos do zero um site pensado exclusivamente para atender as necessidades do seu negócio. Utilizamos das ferramentas mais modernas do mercado para criar uma solução única que irá alavancar a visibilidade do seu produto!" },
        { title: "Desenvolvimento de Sistemas Web", img: notebook, description: "Com auxílio das mais completas linguagens de programação, fornecemos aplicativos e sistemas próprios para a sua empresa que irão acelerar e auxiliar internamente no gerenciamento e desenvolvimento do seu negócio." },
    ];

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
            {cardsData.map((card, index) => (
            <CardP key={index} title={card.title} img={card.img} description={card.description} link={card.link} isExpanded={expandedCard === index} onClick={() => handleCardClick(index)} />
            ))}
        </CardContent>

        <Slider />
        </>
    );
    };

export default Computacao;
