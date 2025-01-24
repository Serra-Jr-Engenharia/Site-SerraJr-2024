import React, { useRef } from "react"
import Membros from '../../../../Assets/Home/membros-2.webp'
import SetaEsquerda from '../../../../Assets/AboutUs/setaEsquerda.png';
import SetaDireita from '../../../../Assets/AboutUs/setaDireita.png';

import {Container, TextAbout, TextContainer, Image, Retangulo, CardContainer, Title, CarouselContainer, Botao} from './style'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Historia: React.FC = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    

    return (
        <Container>
            <Title>NOSSA HISTÓRIA</Title>
            <Retangulo></Retangulo>
            <CarouselContainer>
                <Botao ref={prevRef}>
                    <img src={SetaEsquerda} width={60} height={60}></img>
                </Botao>
                <Swiper
                    modules={[Navigation]}
                    onInit={(swiper) => {
                      if (prevRef.current && nextRef.current) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                      }
                    }}                    
                >
                    <SwiperSlide>
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
                    </SwiperSlide>

                    
                    
                </Swiper>
                <Botao ref={nextRef}>
                    <img src={SetaDireita}  width={60} height={60}></img>
                </Botao>
            </CarouselContainer>
        </Container>
    )
}

export default Historia