import Slider from './Components/Slider/index'
import Banner from './Components/Banner/index'
import {Title, TitleContainer, CardContent} from './style'
import CardP from "../../Components/CardP"

const Computacao: React.FC = () =>{

    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (index) => {
        setExpandedCard( index === expandedCard ? null : index);
    }

    const cardsData = [
        { title: "Cervejelas", description: "Cervejelas 2023"}
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
                    {cardsData.map((card,index => (
                        <CardP key={index} title={card.title} img={card.img} description={card.description} isExpanded={expandedCard === index} onClick={() => handleCardClick(index)}/>
                    )))}
                    
                </CardContent>
            <Slider/>
            
        </>
    )
}

export default Computacao