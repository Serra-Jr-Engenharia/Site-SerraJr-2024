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
    background: linear-gradient(90deg, #04add7 0%, #049fc7 29%, #000d1a 100%);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div``;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export const CarouselButton = styled.button`
  background-color: transparent;
  color: #007bff;
  border: none;
  font-size: 30px;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.3s ease;

  &:hover {
    color: #0056b3;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  overflow: hidden;

  width: 80%;
  max-width: 1200px;
  justify-content: center;
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  gap: 8px;
`;

export const Indicator = styled.span<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#333" : "#bbb")};
  transition: background-color 0.3s;
`;

export const CardContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: stretch;

  flex-wrap: nowrap;

  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

export const StyledHr = styled.hr`
  border: none;
  height: 4px;
  background-color: rgba(0, 13, 26, 0.15);
  width: 100%;
  opacity: 5;
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
  flex-wrap: wrap;
  margin-top: 2rem;
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

  @media (max-width: 768px) {
    width: 400px;
    height: 350px;
  }

  @media (max-width: 500px) {
    width: 330px;
    height: 340px;
  }

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

    @media (max-width: 768px) {
      max-width: 15%;
      margin-top: 1rem;
    }
  }

  p.title-card {
    position: relative;
    top: -9rem;
    margin-left: 7.6rem;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      top: -8rem;
    }

    @media (max-width: 500px) {
      font-size: 1.3rem;
      top: -7rem;
      margin-left: 6rem;
    }
  }

  p.description-card {
    position: relative;
    text-align: justify;
    top: -9rem;
    left: 7.6rem;
    color: gray;
    font-size: 1rem;
    width: 335px;

    @media (max-width: 768px) {
      width: 250px;
    }

    @media (max-width: 500px) {
      width: 200px;
      font-size: 0.9rem;
      top: -8rem;
      left: 6rem;
    }
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

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
      margin-left: 1rem;
      margin-top: 7rem;
    }
  }
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 6rem;
  flex-wrap: wrap;
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
export const ContactButton = styled.button`
  background: linear-gradient(90deg, #04add7 0%, #049fc7 29%, #000d1a 100%);
  padding: 0.5rem 2rem;
  border-radius: 4rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
  border: 0;
  cursor: pointer;

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
