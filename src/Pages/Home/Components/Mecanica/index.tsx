import React from "react";
import { Container, Title, Text, Card, Button, CardContainer, RightContent, LeftContent, Image, Icon, CardText } from "./style";
import Computador from "../../../../Assets/Home/Computador.png";
import ImageManutencao from '../../../../Assets/Home/manutencao.svg';
import ImageAutomacao from '../../../../Assets/Home/automacao.svg';
import ImageDesenho from '../../../../Assets/Home/desenho.svg';
import ImagePrototipagem from '../../../../Assets/Home/prototipagem.svg';

const Mecanica: React.FC = () => {
    return(
        <Container>
            <LeftContent>
                <Title>Projetos de Mecânica</Title>
                <Text>Projeto e manutenção de equipamentos, elaboração de desenhos técnicos em CAD, desenvolvimentos de automação com tecnologias da indústria 4.0 e criação de protótipos de baixo custo com impressoras 3D e CNC.</Text>

                <CardContainer>
                    <Card>
                        <Icon src={ImageManutencao}/>
                        <CardText>Projeto e Manutenção de Equipamentos</CardText>
                    </Card>
                    <Card>
                        <Icon src={ImageAutomacao}/>
                        <CardText>Projetos de Automação</CardText>
                    </Card>
                </CardContainer>
                <CardContainer>
                    <Card>
                        <Icon src={ImageDesenho}/>
                        <CardText>Desenho Técnico e Industrial</CardText>
                    </Card>
                    <Card>
                        <Icon src={ImagePrototipagem}/>
                        <CardText>Prototipagem</CardText>
                    </Card>
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
