import React from "react";

import Historia from './Components/Historia/index'
import Img from "../../Assets/SobreNos//SobreNos.png";

import valoresIcon from "../../Assets/SobreNos/valores.png";
import visaoIcon from "../../Assets/SobreNos/visao.png";
import missaoIcon from "../../Assets/SobreNos/missao.png";
// import sobreFormaDireita from '../../Assets/SobreFormaDireita.png'
// import sobreFormaEsquerda from '../../Assets/SobreFormaEsquerda.png'

import {
  Content,
  Banner,
  Slogan,
  Text,
  Card,
  Title,
  CardsContainer,
  BannerImg,
  IconContainer,
} from "./style";
// import { ImageLeft, ImageRight } from './style';

import Slider from "./Components/Slider";

const DATA = [
  {
    icon: missaoIcon,
    alt: "Icones de missão",
    title: "Missão",
    text: "Promover o desenvolvimento e evolução dos acadêmicos para que sejam capazes de impactar e agregar valores às pessoas e empresas de Nova Friburgo e região, através de projetos mecânicos e de computação.",
  },
  {
    icon: visaoIcon,
    alt: "Icones de visão",
    title: "Visão",
    text: "Idealizar nossa empresa como exemplo em inovação e qualidade de serviços",
  },
  {
    icon: valoresIcon,
    alt: "Icones de valores",
    title: "Valores",
    text: (
      <ul>
        <li>Dedicação por excelência;</li>
        <li>Gestão segura;</li>
        <li>Impactar nossa era;</li>
        <li>Evolução constante;</li>
        <li>Responsabilidade com os clientes;</li>
      </ul>
    ),
  },
];

const Sobre: React.FC = () => {
  return (
    <>
      <Content>
        <Banner>
          <BannerImg src={Img} />
          <Slogan>Sobre nós</Slogan>
          {/* <ImageRight src={sobreFormaDireita} alt="Forma Direita" />
                <ImageLeft src={sobreFormaEsquerda} alt="Forma Esquerda" /> */}
        </Banner>

        <CardsContainer>
          {DATA.map((card, index) => (
            <Card key={index}>
              <IconContainer>
                <img src={card.icon} alt={card.alt} style={{ width: "70px" }} />
              </IconContainer>
              <Title>{card.title}</Title>
              <Text>{card.text}</Text>
            </Card>
          ))}
        </CardsContainer>

        <Historia />

        <Slider />
      </Content>
    </>
  );
};

export default Sobre;
