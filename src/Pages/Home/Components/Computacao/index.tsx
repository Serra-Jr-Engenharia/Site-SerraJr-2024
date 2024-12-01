import React from "react";
import { Container, Title, Text, Card, Button, CardContainer, RightContent, LeftContent, Image, Icon } from "./style";
import Celular from "../../../../Assets/Home/Celular.png"
import Phone from "../../../../Assets/Home/phone.svg"
import Website from "../../../../Assets/Home/website.svg"
import WebSystem from "../../../../Assets/Home/webSystem.svg"

const Computacao: React.FC = () => {
    return(
        <Container>
            <LeftContent>
                <Image src={Celular}/>
            </LeftContent>
            <RightContent>
                <Title>Projetos de Computação</Title>
                <Text>Desenvolvimento de sites, sistemas web e aplicativos personalizados, utilizando tecnologias modernas para impulsionar negócios e facilitar sua gestão.</Text>
                <CardContainer>
                    <Card><Icon src={Website}/> Desenvolvimento de Websites</Card>
                    <Card><Icon src={WebSystem}/> Desenvolvimento de Sistemas Web</Card>
                </CardContainer>
                <CardContainer>
                    <Card> <Icon src={Phone}/>Desenvolvimento de Aplicativos</Card>
                </CardContainer>
                <Button>Saiba Mais</Button>
            </RightContent>
        </Container>
    )
}

export default Computacao;