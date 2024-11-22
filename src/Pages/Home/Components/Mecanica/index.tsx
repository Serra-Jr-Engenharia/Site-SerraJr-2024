import React from "react";
import { Container, Title, Text, Card, Button, CardContainer, RightContent, LeftContent, Image, Icon } from "./style";
import Computador from "../../../../Assets/Computador.png";
import ImageManutencao from '../../../../Assets/manutencao.svg';
import ImageAutomacao from '../../../../Assets/automacao.svg';
import ImageDesenho from '../../../../Assets/desenho.svg'
import ImagePrototipagem from '../../../../Assets/prototipagem.svg'


const Mecanica: React.FC = () => {
    return(
        <Container>
            <LeftContent>
                <Title>Projetos de Mecânica</Title>
                <Text>Projeto e manutenção de equipamentos, elaboração de desenhos técnicos em CAD, desenvolvimentos de automação com tecnologias da indústria 4.0 e criação de protótipos de baixo custo com impressoras 3D e CNC.</Text>

                <CardContainer>
                    <Card><Icon src={ImageManutencao}/>Projeto e <br />Manutenção de <br />Equipamentos</Card>
                    <Card><Icon src={ImageAutomacao}/>Projetos de <br />Automação</Card>
                </CardContainer>
                <CardContainer>
                    <Card><Icon src={ImageDesenho}/>Desenho Técnico e Industrial</Card>
                    <Card><Icon src={ImagePrototipagem}/>Prototipagem</Card>
                </CardContainer>
                
                <Button>Saiba Mais</Button>
            </LeftContent>
            
            <RightContent> 
                <Image src={Computador}/>
            </RightContent>






        </Container>




    );

}

export default Mecanica;