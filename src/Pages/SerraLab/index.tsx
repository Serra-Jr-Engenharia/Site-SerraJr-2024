import Banner from "./Components/Banner";
import Slider from "../../Components/Slider";
import {
  CardSpecialContainer,
  CardSpecial,
  ContactSection,
  ContactText,
  ContactButton,
  Title,
  TitleContainer,
  CardContainer,
  Card,
} from "../SerraLab/style"; // Importando os estilos de Computação
import image51 from "../../Assets/SerraLab/Group 51.svg";
import image50 from "../../Assets/SerraLab/Group 50.svg";
import image49 from "../../Assets/SerraLab/Group 49.svg";
import image48 from "../../Assets/SerraLab/Group 48.svg";
import image47 from "../../Assets/SerraLab/Group 47.svg";
import image46 from "../../Assets/SerraLab/Group 46.svg";
import image45 from "../../Assets/SerraLab/Group 45.svg";
import seta1 from "../../Assets/SerraLab/Mask group.svg";
import seta2 from "../../Assets/SerraLab/Mask group - Copia.svg";
import image1 from "../../Assets/SerraLab/Group 25.png";
import { useState } from "react";

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

const SerraLab: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <>
      <Banner />
      <div>
        <TitleContainer>
          <Title>O QUE É O SERRA LAB ?</Title>
        </TitleContainer>

        <CardContainer>
          {[1, 2, 3].map((id) => (
            <Card
              key={id}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                filter:
                  hovered !== null && hovered !== id ? "blur(1px)" : "none",
              }}
            >
              <img src={image1} alt="Grupo SerraLab" />
              <p>
                Ele oferece ferramentas avançadas, como impressoras 3D,
                cortadoras CNC e equipamentos de prototipagem, possibilitando a
                criação de soluções personalizadas.
              </p>
            </Card>
          ))}
        </CardContainer>
      </div>
      <div style={{ height: "240vh" }}>
        <TitleContainer>
          <Title>Carta de Serviços</Title>
        </TitleContainer>
        <CardSpecialContainer>
          {cardsData4.map((card, index) => (
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

      <ContactSection>
        <ContactText>Quer colocar seu projeto em prática?</ContactText>
        <ContactButton href="/contatos">Entre em Contato</ContactButton>
      </ContactSection>
      <Slider />
    </>
  );
};

export default SerraLab;
