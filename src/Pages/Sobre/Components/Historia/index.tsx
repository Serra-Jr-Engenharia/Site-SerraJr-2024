import React from "react"
import Membros from '../../../../Assets/Home/membros-2.webp'
import SetaEsquerda from '../../../../Assets/AboutUs/setaEsquerda.png';
import SetaDireita from '../../../../Assets/AboutUs/setaDireita.png';

import {Container, TextAbout, TextContainer, Image, Retangulo, CardContainer, Title, CarouselContainer, Botao} from './style'

const Historia: React.FC = () => {
    return (
        <Container>
            <Title>NOSSA HISTÓRIA</Title>
            <Retangulo></Retangulo>
            <CarouselContainer>
                <Botao>
                    <img src={SetaEsquerda} width={60} height={60}></img>
                </Botao>
                <CardContainer>
                    <TextContainer>
                        <TextAbout>
                        A Serra Jr. Engenharia, é uma Empresa Júnior vinculada ao Instituto Politécnico da Universidade
                        do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a prestação de serviços
                        como prototipagem, automação, desenho técnico industrial, projeto e manutenção de equipamentos e o
                        desenvolvimento de websites e sistemas web.
                        </TextAbout>
                    </TextContainer>
                    <Image src={Membros} alt="Membros Serra Jr."></Image>
                </CardContainer>
                <Botao>
                    <img src={SetaDireita}  width={60} height={60}></img>
                </Botao>
            </CarouselContainer>
        </Container>
    )
}

export default Historia