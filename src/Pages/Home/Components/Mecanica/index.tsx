import React from "react";
import { Container, Title, Text, Card, Button, CardContainer, RightContent, LeftContent, Image, Icon } from "./style";
import Computador from "../../../../Assets/Computador.png";
import Manutencao from "../../../../Assets/manutencao.svg";
import Desenho from "../../../../Assets/desenho.svg"
import Mask from "../../../../Assets/Mask.svg"
import Printer from "../../../../Assets/3dprinter.svg"


const Mecanica: React.FC = () => {
    return(
        <Container>
            <LeftContent>
                <Title>Projetos de Mecânica</Title>
                <Text>Projeto e manutenção de equipamentos, elaboração de desenhos técnicos em CAD, desenvolvimentos de automação com tecnologias da indústria 4.0 e criação de protótipos de baixo custo com impressoras 3D e CNC.</Text>

                <CardContainer>
                    <Card><Icon src={Manutencao}/>Projeto e Manutenção de Equipamentos</Card>
                    <Card><Icon src={Mask}/>Projetos de Automação</Card>
                </CardContainer>
                <CardContainer>
                    <Card><Icon src={Desenho}/>Desenho Técnico e Industrial</Card>
                    <Card><Icon src={Printer}/>Prototipagem</Card>
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