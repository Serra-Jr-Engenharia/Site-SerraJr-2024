import React from "react"
import Membros from '../../../../Assets/SobreNos/membros-2.webp'

import {Container, TextContainer, TextAbout, Image, Title, Retangulo, TitleContainer} from './style'

const SobreNos: React.FC = () => {
    return (
        <Container>
            <TextContainer>
                <TitleContainer>
                    <Title>NOSSA HISTÓRIA</Title>
                    <Retangulo></Retangulo>
                </TitleContainer>
                <TextAbout>
                A SERRA JR. ENGENHARIA, FUNDADA EM 2002 POR ALUNOS DE ENGENHARIA MECÂNICA E DE COMPUTAÇÃO DO IPRJ/UERJ,
                BUSCA PROMOVER A INSERÇÃO DOS ESTUDANTES NO MERCADO EMPRESARIAL. APÓS UMA PAUSA EM 2011 DEVIDO À TRAGÉDIA
                CLIMÁTICA EM NOVA FRIBURGO, RETOMOU SUAS ATIVIDADES EM 2013 E HOJE OFERECE SOLUÇÕES INOVADORAS EM ENGENHARIA
                PARA O MERCADO.
                </TextAbout>
            </TextContainer>
            <Image src={Membros} alt="Membros Serra Jr."></Image>
        </Container>
    )
}

export default SobreNos