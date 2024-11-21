import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 300px; /* Altura do header */
  background-color: #0a0b0d; /* Cor de fundo */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled.div`
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 24px; /* Tamanho da fonte */
  color: #ffffff; /* Cor do texto */
  font-family: 'Arial', sans-serif; /* Fonte */
  text-transform: uppercase;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>ENGRENANDO IDEIAS, INOVANDO O MERCADO.</HeaderTitle>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;