import React from "react"
import Membros from '../../../../Assets/SobreNos/membros-2.webp'
import { useNavigate } from "react-router-dom";

import {
    Container, 
    TextContainer, 
    TextAbout, 
    Image, 
    Title, 
    Retangulo, 
    TitleContainer, 
    Button} from './style'

const SobreNos: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
            navigate("/SobreNos"); 
    };
    
    return (
        <Container>
            <TextContainer>
                <TitleContainer>
                    <Title>NOSSA HISTÓRIA</Title>
                    <Retangulo></Retangulo>
                </TitleContainer>
                <TextAbout>
                A SERRA JR. ENGENHARIA, fundada em 2002 por alunos de Engenharia Mecânica e Engenharia da Computação do IPRJ/UERJ,
                busca promover a inserção dos estudantes no mercado empresarial. Após uma pausa em 2011 devido à tragédia climática
                em Nova Friburgo, retomou suas atividades em 2013 e hoje oferece soluções inovadoras em Engenharia para o mercado.
                </TextAbout>
                <Button onClick={handleButtonClick}>Saiba Mais</Button>
            </TextContainer>

            <Image src={Membros} alt="Membros Serra Jr."></Image>   
                     

        </Container>
    )
}

export default SobreNos