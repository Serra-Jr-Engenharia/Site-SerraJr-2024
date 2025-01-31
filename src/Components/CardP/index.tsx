import React from "react";

import {
    Container,
    Image,
    Title,
    Button,
    Description
} from "./style";

interface CardProps {
    title: string;
    img?: string;
    description?: string;
    isExpanded: boolean;
    onClick: () => void;
}

const CardP: React.FC<CardProps> = ({title, img, description, isExpanded, onClick}) => {
    return(
        <Container isExpanded={isExpanded} onClick={onClick}>
            {img && <Image src={img} alt={title} isExpanded={isExpanded}/>}
            <Title isExpanded={isExpanded}>{title}</Title>
            {isExpanded &&<Description isExpanded={isExpanded}>{description}</Description>}
            {isExpanded && <Button isExpanded={isExpanded}>Saiba Mais</Button>}

        </Container>
    );
};

export default CardP;