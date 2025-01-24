import React from "react";

import {
    Container,
    Image,
    Title,
    Button,
    Description

} from "./style";

const CardP: React.FC = ({title, img, description, isExpanded, onCLick}) => {
    return(
        <Container isExpanded={isExpanded} onClick={onClick}>
            {img && <Image src={img} alt={title}/>}
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
            {isExpanded && <Button>Saiba Mais</Button>}

        </Container>
    );
};

export default CardP;