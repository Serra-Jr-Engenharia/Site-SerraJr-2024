import React from 'react'
import Banner from "./Components/Banner"

import agenda from '../../Assets/Contact/agenda.svg'
import email from '../../Assets/Contact/email.svg'
import telefone from '../../Assets/Contact/telefone.svg'
import localizacao from '../../Assets/Contact/localizacao.svg'

import { Content,
    FormContainer,
    InformationContainer,
    Input,
    Button,
    Textarea,
    InformationCont,
    InformationImg,
    InformationText,
    Container
 } from './style'
import Slider from '../../Components/Slider';
import Mapa from './Components/Map/index'

const Contato: React.FC = () =>{
    return(
        <>
        <Content>
            <Banner/>
            <Container>
                <FormContainer>
                    <Input type="text" placeholder="Nome Completo"/>
                    <Input type="email" placeholder="E-mail" />
                    <Input type="tel" placeholder="Telefone" />
                    <Textarea placeholder="Mensagem" rows={1}></Textarea>
                    <Button>Enviar</Button>
                </FormContainer>
                <InformationContainer>
                    <InformationCont>
                        <InformationImg src={agenda}/>
                        <InformationText>Rua Bonfim n°25 - Vila Amelia, Nova Friburgo - RJ, 28625-570</InformationText>
                    </InformationCont>
                    <InformationCont>
                        <InformationImg src={telefone}/>
                        <InformationText>(22) 2533-2265</InformationText>
                    </InformationCont>
                    <InformationCont>
                        <InformationImg src={email}/>
                        <InformationText>serrajr@iprj.uerj.br</InformationText>
                    </InformationCont>
                    <InformationCont>
                        <InformationImg src={localizacao}/>
                        <InformationText>Horário de atendimento: Segunda a Sexta, das 09hrs às 17hrs.</InformationText>
                    </InformationCont>
                </InformationContainer>
            </Container>
            <Mapa />
            <Slider/>
        </Content>
        
        </>
    )
}

export default Contato