import React from 'react'

import Historia from './Components/Historia/index'
import Img from '../../Assets/AboutUs/SobreNos.png'

import valoresIcon from '../../Assets/valores.png'
import visaoIcon from '../../Assets/visao.png'
import missaoIcon from '../../Assets/missao.png'
// import sobreFormaDireita from '../../Assets/SobreFormaDireita.png'
// import sobreFormaEsquerda from '../../Assets/SobreFormaEsquerda.png'

import { Content, Banner, Slogan, Text, Card, Title, CardsContainer, BannerImg, IconContainer } from './style'
// import { ImageLeft, ImageRight } from './style';

import Slider from './Components/Slider'

const Sobre: React.FC = () =>{
    return(
        <Content>
            <Banner>
                <BannerImg src={Img}/>
                <Slogan>Sobre nós</Slogan>
                {/* <ImageRight src={sobreFormaDireita} alt="Forma Direita" />
                <ImageLeft src={sobreFormaEsquerda} alt="Forma Esquerda" /> */}

            </Banner>
            
            <CardsContainer>  
             <Card> 
                <IconContainer>
                    <img src={missaoIcon} alt="Icones de missão" style={{width:"70px"}}/>
                </IconContainer>
                <Title>Missão</Title>
                <Text>Promover o desenvolvimento e evolução dos acadêmicos para que sejam capazes de impactar e agregar valores às pessoas e empresas de Nova Friburgo e região, através de projetos mecânicos e de computação.</Text>
            </Card>
            
            <Card>
                <IconContainer>
                    <img src={visaoIcon} alt="Icones de visão" style={{width:"70px"}}/>
                </IconContainer>
                <Title>Visão</Title>
                <Text>Idealizar nossa empresa como exemplo em inovação e qualidade de serviços</Text>
            </Card>

            <Card>
                <IconContainer>
                    <img src={valoresIcon} alt="Icones de valores" style={{width:"70px"}}/>
                </IconContainer>
                <Title>Valores</Title>
                <Text>
                    <ul>
                        <li>Dedicação por excelência;</li>
                        <li>Gestão segura;</li>
                        <li>Impactar nossa era;</li>
                        <li>Evolução constante;</li>
                        <li>Responsabilidade com os clientes;</li>
                    </ul>
                </Text>
            </Card>
            </CardsContainer>  
            <Historia />
            <Slider/>
        </Content>
        
    )
}

export default Sobre;