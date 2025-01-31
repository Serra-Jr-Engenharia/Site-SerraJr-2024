import { useState } from 'react'
import Slider from './Components/Slider/index'
import Banner from './Components/Banner/index'
import {Title, TitleContainer, CardContent} from './style'
import CardP from "../../Components/CardP"
import cervejelas from "../../Assets/Cervejelas.png"
import tmf from "../../Assets/TMF.png"
import ods from "../../Assets/odsquiz 1.png"
import prownovar from "../../Assets/prownovar.png"
import etar from "../../Assets/etarserra 2023.png"
import friburguense from "../../Assets/Friburguense.svg"

const Computacao: React.FC = () =>{

    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (index) => {
        setExpandedCard( index === expandedCard ? null : index);
    }

    const cardsData = [
        { title: "Cervejelas", img: cervejelas,description: "Cervejelas 2023"},
        {title: "ODS Quiz",img: ods,description: "Hackathon Hack2030"},
        {title: "Projeto Friburguense", img: friburguense,description: "Friburguense Atlético Clube"},
        {title: "Projeto TMF", img: tmf,description: "Cervejelas 2023"},
        {title: "ETArserra 2022", img: etar,description: "Cervejelas 2023"},
        {title: "Prownovar", img: prownovar,description: "Cervejelas 2023"},
    ];

    return(
        <>
            <Banner/>
            <div style={{height: '60vh', width: '100%'}}>

            <TitleContainer> 
                <Title>
                    Carta de serviços
                </Title>
                <hr/>
            </TitleContainer>

            </div>
            <CardContent>
                    {cardsData.map((card,index) => (
                        <CardP key={index} title={card.title} img={card.img} description={card.description} isExpanded={expandedCard === index} onClick={() => handleCardClick(index)}/>
                    ))}
            </CardContent>
            <Slider/>
            
        </>
    )
}

export default Computacao