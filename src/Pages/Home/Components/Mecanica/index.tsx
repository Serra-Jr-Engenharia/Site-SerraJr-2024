import React from "react";
import { Container, Title, Text, Card, Button, CardContainer, RightContent, LeftContent, Image } from "./style";
import Computador from "../../../../Assets/Computador.png";


const Mecanica: React.FC = () => {
    return(
        <Container>
            <RightContent> 
                <Image src={Computador}/>
            </RightContent>
            <LeftContent>
                <Title>Projetos de Mecânica</Title>
                <Text>Projeto e manutenção de equipamentos, elaboração de desenhos técnicos em CAD, desenvolvimentos de automação com tecnologias da indústria 4.0 e criação de protótipos de baixo custo com impressoras 3D e CNC.</Text>

                <CardContainer>
                    <Card>Projeto e Manutenção de Equipamentos</Card>
                    <Card>Projetos de Automação</Card>
                    <Card>Desenho Técnico e Industrial</Card>
                    <Card>Prototipagem</Card>
                </CardContainer>
                
                <Button>Saiba Mais</Button>
            </LeftContent>






        </Container>




    );

}

export default Mecanica;