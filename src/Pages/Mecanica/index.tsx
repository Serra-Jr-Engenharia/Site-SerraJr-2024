import Banner from './Components/Banner/index';
import Slider from '../../Components/Slider';
import {Title, TitleContainer, CardSpecialContainer, CardSpecial } from '../Mecanica/style'; // Importando os estilos de Computação
import image43 from "../../Assets/Mecanica/image 43.png";
import image44 from "../../Assets/Mecanica/image 44.png";
import image45 from "../../Assets/Mecanica/image 45.png";
import image46 from "../../Assets/Mecanica/image 46.png";
import seta1 from "../../Assets/Mecanica/seta laranja 4.png";
import seta2 from "../../Assets/Mecanica/seta laranja 4 - Copia.png";

const cardsData3 = [
    { title: "Projeto e Manutenção de Equipamentos", img: image46, description: "Desenvolvemos equipamentos personalizados para atender às demandas dos clientes. Nosso time analisa a fundo as necessidades, passando por todas as etapas do projeto: estudo detalhado, desenho técnico, criação de protótipos, execução e manutenção." },
    { title: "Desenho Técnico e Industrial", img: image43, description: "Com auxílio de programas CAD, a Serra Jr oferece serviços de desenhos de peças e maquinários, em 2D e 3D, para dar vida ao conceito proposto pelo cliente seguindo todas as normas necessárias nesse processo tão significante de um projeto." },
    { title: "Prototipagem", img: image45, description: "Desenvolvemos equipamentos personalizados para atender às demandas dos clientes. Nosso time analisa a fundo as necessidades, passando por todas as etapas do projeto: estudo detalhado, desenho técnico, criação de protótipos, execução e manutenção." },
    { title: "Projetos de Automação", img: image44, description: "Com base na demanda do cliente, criamos projetos de automação e otimização de tarefas, focando no melhor aproveitamento do tempo. Utilizamos estudos detalhados e protótipos com microcontroladores, CLPs e tecnologias da Indústria 4.0." },
];

const Mecanica: React.FC = () => {
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
            <div style={{ height: '150vh' }}>
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
            </div>
            <Slider />
        </>
    );
}

export default Mecanica;
