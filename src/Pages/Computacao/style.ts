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
  margin-bottom: 6rem;
`;

export const Title = styled.h2`
  color: "#000D1A";
  font-size: 3rem;
`;

// Container de cardsData2(aulas)
export const CardSpecialContainer = styled.div`
  position: relative; // Posiciona o card dentro do fluxo
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  gap: 2rem;
`;

export const CardSpecial = styled.div`
  width: 500px;
  height: 400px;
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
      #000d1a,
      #04add7
    ); // Gradiente invertido
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

export const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 6rem;
`;

export const TechIcon = styled.img`
  width: 70px;
  height: 70px;
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
  background: linear-gradient(90deg, #04add7 0%, #049fc7 29%, #000d1a 100%);
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
      rgba(4, 173, 215, 0.75) 0%,
      rgba(4, 160, 199, 0.69) 29%,
      rgba(0, 13, 26, 0.89) 100%
    );
    transform: scale(1.05);
  }
`;
