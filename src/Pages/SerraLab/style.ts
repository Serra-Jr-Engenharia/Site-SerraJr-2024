import styled from "styled-components";

export const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(4, 173, 215);
  background: linear-gradient(
    to right bottom,
    rgba(4, 173, 215, 0.1) 42%,
    rgba(253, 99, 0, 0.1) 70%
  );
`;

export const CardSpecialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas */
  grid-gap: 20px; /* Espaçamento entre os cards */
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
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

  &:hover {
    background: linear-gradient(
      to right bottom,
      #000D1A,
      #001830
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
export const ContactButton = styled.button`
  background: linear-gradient(90deg,rgba(0, 24, 48, 0.72) , #001830, #000D1A);
  padding: 0.5rem 2rem;
  border-radius: 4rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, rgba(30, 54, 78, 0.72), #1a3350, #000D1A);
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  position: relative;
  display: inline-block;
  color: #000d1a;
  margin: 0 auto;

  &::after {
    content: "";
    display: block;
    height: 4px;
    background: linear-gradient(to right, #1a3350 , #001830);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  align-self: auto;
  height: 450px;
  justify-content: center;
  gap: 80px;
  padding: 20px;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  width: 350px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  transition: filter 0.4s ease, transform 0.4s ease;

  img {
    position: absolute;
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  p {
    border-radius: 10px;
    position: absolute;
    bottom: 0px;
    margin: 0;
    height: 100px;
    color: white;
    font-style: italic;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.01)
    );
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;
