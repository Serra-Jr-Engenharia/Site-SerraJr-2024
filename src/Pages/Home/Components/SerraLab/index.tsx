import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const Serralab: React.FC = () => {
    const navigate = useNavigate();

    return(
        <Container>
            <Text>Teste</Text>
        </Container>
    );
}

export default Serralab;