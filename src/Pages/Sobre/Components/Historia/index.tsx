import React from "react"
import Membros from '../../../../Assets/SobreNos/membros-1.webp'
import Membros2 from '../../../../Assets/SobreNos//membros-2.webp'

import {Container, TextAbout, Image, Retangulo, CardContainer, Title, StyledSwiperSlide} from './style'


import { Navigation, Pagination } from 'swiper/modules';

import { Swiper } from 'swiper/react';
import './swiper.css'

const Historia: React.FC = () => {
    const content = [
        { 
            id: 1, 
            texto: "A Serra Jr. Engenharia, é uma Empresa Júnior vinculada ao Instituto Politécnico da Universidade\
            do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a prestação de serviços\
            como prototipagem, automação, desenho técnico industrial, projeto e manutenção de equipamentos e o\
            desenvolvimento de websites e sistemas web.",
            image: Membros
        },
        { 
            id: 2, 
            texto: "Tem como membros alunos dos cursos de Engenharia Mecânica e de Computação atuando em regime de voluntariado, determinados a adquirir experiência colocando seus conhecimentos em prática, com o objetivo de trazer inovação e excelência ao mercado. Além disso, conta com o suporte e orientação dos professores doutores e técnicos da instituição.",
            image: Membros2
        },
        { 
            id: 3, 
            texto: "O faturamento é integralmente destinado à manutenção financeira da empresa e para o desenvolvimento técnico e intelectual de seus membros, com cursos, treinamentos ou outras oportunidades que contribuam para a capacitação profissional, além das vivências experienciadas na Universidade.",
            image: Membros
        }
    ]

    return (
        <Container>
            <Title>NOSSA HISTÓRIA</Title>
            <Retangulo></Retangulo>
            <CardContainer>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {content.map((item) => (
                        <StyledSwiperSlide key={item.id}>
                            <TextAbout>
                                {item.texto}
                            </TextAbout>
                            <Image src={item.image} alt="Membros Serra Jr."></Image>
                        </StyledSwiperSlide>
                    ))}
                </Swiper>
            </CardContainer>
        </Container>

    )
}


export default Historia