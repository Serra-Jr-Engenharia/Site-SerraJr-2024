import React from 'react'

import Historia from './Components/Historia/index'
import Img from '../../Assets/AboutUs/SobreNos.png'


import { Content, Banner, Slogan, Text, Card, Title, CardsContainer, BannerImg } from './style'

const Sobre: React.FC = () =>{
    return(
        <Content>
            <Banner>
                <BannerImg src={Img}/>
                <Slogan>Sobre nós</Slogan>
            </Banner>
            <CardsContainer>  
             <Card>
                <Title>Missão</Title>
                <Text>Promover o desenvolvimento e evolução dos acadêmicos para que sejam capazes de impactar e agregar valores às pessoas e empresas de Nova Friburgo e região, através de projetos mecânicos e de computação.</Text>
            </Card>
            
            <Card>
                <Title>Missão</Title>
                <Text>Promover o desenvolvimento e evolução dos acadêmicos para que sejam capazes de impactar e agregar valores às pessoas e empresas de Nova Friburgo e região, através de projetos mecânicos e de computação.</Text>
            </Card>

            <Card>
                <Title>Missão</Title>
                <Text>Promover o desenvolvimento e evolução dos acadêmicos para que sejam capazes de impactar e agregar valores às pessoas e empresas de Nova Friburgo e região, através de projetos mecânicos e de computação.</Text>
            </Card>
            </CardsContainer>
            <Historia />
        </Content>
        
    )
}

export default Sobre;