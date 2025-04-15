import Banner from "./Components/Banner";
import Slider from "../../Components/Slider";
import { useNavigate } from "react-router-dom";
import {
  CardSpecialContainer,
  CardSpecial,
  CardSpecialAux,
  ContactSection,
  ContactText,
  ContactButton,
  Title,
  TitleContainer,
  CardContainer,
  Card,
  Content,
} from "../SerraLab/style"; // Importando os estilos de Computação
import image51 from "../../Assets/SerraLab/Group 51.svg";
import image50 from "../../Assets/SerraLab/Group 50.svg";
import image49 from "../../Assets/SerraLab/Group 49.svg";
import image48 from "../../Assets/SerraLab/Group 48.svg";
import image47 from "../../Assets/SerraLab/Group 47.svg";
import image46 from "../../Assets/SerraLab/Group 46.svg";
import image45 from "../../Assets/SerraLab/Group 45.svg";
import seta2 from "../../Assets/SerraLab/seta.svg";
import { useState } from "react";
import image from "../../Assets/SerraLab/group30.jpeg";
import image2 from "../../Assets/SerraLab/group31.jpeg";
import image3 from "../../Assets/SerraLab/group32.jpeg";

const cardsData4 = [
  {
    title: "Prototipagem",
    img: image45,
    description:
      "Criação de protótipos e peças personalizadas usando impressoras 3D e fabricação de componentes específicos.",
  },
  {
    title: "Estamparia",
    img: image46,
    description: "Estampagem de camisas e criação de materiais personalizados.",
  },
  {
    title: "Automação e Robótica",
    img: image47,
    description:
      "Desenvolvimento de sistemas automatizados e montagem de robôs.",
  },
  {
    title: "Manufatura Mecânica",
    img: image48,
    description:
      "Fabricação de peças usinadas com torno mecânico e operações de furação e corte.",
  },
  {
    title: "Eletrônica e soldagem",
    img: image49,
    description:
      "Prototipagem e montagem de circuitos eletrônicos e soldagem de componentes.",
  },
  {
    title: "Design e Desenvolvimento de Produtos",
    img: image50,
    description:
      "Criação de desenhos técnicos e modelos 3D, desenvolvimento de projetos de equipamentos.",
  },
  {
    title: "Corte e Gravação",
    img: image51,
    description:
      "Precisão no corte de diversos materiais utilizando máquinas CNC e produção de adesivos personalizados.",
  },
];

const cardImagesData = [
  {
    id: 1,
    image: image,
    text: "O Serra Lab é um espaço de inovação e criatividade, onde estudantes e profissionais podem desenvolver projetos em diversas áreas, como eletrônica, mecânica, design e muito mais.",
  },
  {
    id: 2,
    image: image2,
    text: "Ele oferece ferramentas avançadas, como impressoras 3D, cortadoras CNC e equipamentos de prototipagem, possibilitando a criação de soluções personalizadas. ",
  },
  {
    id: 3,
    image: image3,
    text: "O objetivo do SerraLab é promover a inovação, a fabricação digital e a colaboração, aproximando o meio acadêmico de empreendedores, profissionais criativos e a comunidade em geral.",
  },
];

const SerraLab: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contatos");
  };

  return (
    <Content>
      <Banner />

      <TitleContainer>
        <Title>O QUE É O SERRA LAB ?</Title>
      </TitleContainer>

      <CardContainer>
        {cardImagesData.map((test) => (
          <Card
            key={test.id}
            onMouseEnter={() => setHovered(test.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              filter:
                hovered !== null && hovered !== test.id ? "blur(1px)" : "none",
            }}
          >
            <img src={test.image} alt="Grupo SerraLab" />
            <p>{test.text}</p>
          </Card>
        ))}
      </CardContainer>

      <TitleContainer>
        <Title>Carta de Serviços</Title>
      </TitleContainer>

      <CardSpecialContainer>
        {cardsData4.map((card, index) => (
          <CardSpecial key={index}>
            <CardSpecialAux>
              <img src={card.img} alt={card.title} />
              <p className="title-card">{card.title}</p>
            </CardSpecialAux>
            <CardSpecialAux>
              <img className="setinha" src={seta2} alt="Seta direita" />
              <p className="description-card">{card.description}</p>
            </CardSpecialAux>
          </CardSpecial>
        ))}
      </CardSpecialContainer>

      <ContactSection>
        <ContactText>Quer colocar seu projeto em prática?</ContactText>
        <ContactButton onClick={handleButtonClick}>
          Entre em Contato
        </ContactButton>
      </ContactSection>

      <Slider />
    </Content>
  );
};

export default SerraLab;
