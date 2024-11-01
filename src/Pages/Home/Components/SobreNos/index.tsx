import React from "react"
import Membros from '../../../../Assets/Home/membros-2.webp'

import {Container, TextContainer, Titulo, TextAbout, Image} from './style'

const SobreNos: React.FC = () => {
    return (
        <Container>
            <TextContainer>
                <Titulo>Nossa História</Titulo>
                <TextAbout>
                A Serra Jr. Engenharia, fundada em 2002 por alunos de Engenharia Mecânica e de Computação do IPRJ/UERJ,
                busca promover a inserção dos estudantes no mercado empresarial. Após uma pausa em 2011 devido à tragédia
                climática em Nova Friburgo, retomou suas atividades em 2013 e hoje oferece soluções inovadoras em engenharia
                para o mercado.
                </TextAbout>
            </TextContainer>
            <Image src={Membros}></Image>
        </Container>
    )
}

export default SobreNos