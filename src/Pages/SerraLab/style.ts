import styled from "styled-components";

export const CardSpecialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas */
  grid-gap: 20px; /* Espaçamento entre os cards */
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

export const CardSpecial = styled.div`
  width: 500px;
  height: 230px;
  background: transparent;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out; // Transição suave no hover
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  margin-bottom: 5rem;
  
  &:hover {
    background: linear-gradient(
      to right bottom,
      #A000B9,
      #000D19
    ); // Gradiente invertido
    transform: scale(1.01);
  }

  img {
    margin-top: 0.5em;
    padding: 1rem;
    max-width: 17%;
    border-radius: 5px;
  }

  p.title-card {
    position: relative;
    top: -7rem;
    margin-left: 7.6rem;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p.description-card {
    position: relative;
    text-align: justify;
    top: -6rem;
    left: 7.6rem;
    color: gray;
    font-size: 1rem;
    width: 335px;
  }
  &:nth-child(1) p.description-card {
    margin-top: 0.5rem;
  }
  &:nth-child(2) p.description-card {
      margin-top: 0.5rem;
  }
  
  &:nth-child(3) p.description-card {
      margin-top: 0%.6;
  }
  
  &:nth-child(4) p.description-card {
  margin-top: 0.5rem;
  }
  &:nth-child(5) p.description-card {
  margin-top: 0.5rem;
  }
  &:nth-child(6) p.description-card {
  margin-top: -1rem;
  }
  &:nth-child(6) p.title-card {
          margin-top: 2rem;
          font-size: 1.7rem;
  }
  &:nth-child(7) p.description-card {
      margin-top: 0.5rem;
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
    margin-top: 6rem;
    width: 42px;
    height: 42px;
  }
  &:nth-child(6) .setinha {
      margin-top: 7rem;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
`;
export const ContactText = styled.p`
  color: #000d1a;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const ContactButton = styled.a`
  background: linear-gradient(90deg,#A000B9, #000D19 100%);
  padding: 0.5rem 2rem;
  border-radius: 4rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(
      90deg,
rgb(224, 32, 254), #000D19 100%
    );
    transform: scale(1.05);
  }
`;
