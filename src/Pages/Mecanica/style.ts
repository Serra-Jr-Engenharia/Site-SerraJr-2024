import styled from "styled-components";

export const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    rgba(4, 173, 215, 0.2) 42%,
    rgba(253, 99, 0, 0.2) 70%
  );
  padding: 40px;
`;

export const TitleContainer = styled.div`
  padding: 40px;
  width: 100%;
  height: 200px;
`;

export const CardContent = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  
`;

export const Title = styled.h2`
  color: "#000D1A";
  font-size: 3rem;
`;

export const CardSpecialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas */
  grid-gap: 20px; /* Espaçamento entre os cards */
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardSpecial = styled.div`
  width: 500px;
  height: 400px;
  background: transparent;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;  // Transição suave no hover
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  margin-bottom: 5rem;



  &:hover {
    background: linear-gradient(to right bottom, #BD3F01, #FFBD9D);  // Gradiente invertido
    transform: scale(1.01); 
  }

  img {
    margin-top: 2rem;
    padding: 1rem;
    max-width: 17%;
    border-radius: 5px;
  }

  p.title-card {
    position: relative;
    top: -9rem;
    margin-left: 7.6rem;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p.description-card {
    position: relative;
    text-align: justify;
    top: -9rem;
    left: 7.6rem;
    color: gray;
    font-size: 1rem;
    width: 335px;
  }
  &:nth-child(1) p.description-card {
  margin-top: 0.5rem;
  }

  &:nth-child(3) p.description-card {
  margin-top: 2rem;
  }

  &:nth-child(3) p.title-card {
  margin-top: 3rem;
  }   
  &:hover p.title-card {
    color: white;
  }

  &:hover p.description-card {
    color: white;
  }


  // Imagem adicional setas
  .setinha {
    position: absolute;
    margin-left: 2rem;
    margin-top: 9rem;
    width: 42px;
    height: 42px;
  }
`;
