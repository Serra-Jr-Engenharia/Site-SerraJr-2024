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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledHr = styled.hr`
  border: none;
  height: 4px;
  background-color: rgba(0, 13, 26, 0.15);
  width: 100%;
  opacity: 5;
`;

export const Card = styled.div`

`;

export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
  width: 60%;
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
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
    background: linear-gradient(90deg, #bd3f01 0%, #bd3f01 29%, #000d1a 100%);
  }
`;

export const CardSpecialContainer = styled.div`
  position: relative;
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

  &:hover {
    background: linear-gradient(
      to right bottom,
      #bd3f01,
      #ffbd9d
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

    @media (max-width: 768px) {
      font-size: 1.7rem;
      top: -8rem;
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
      width: 345px;
    }

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
  background: linear-gradient(90deg, #ffbd9d 0%, #bd3f01 100%);
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
      rgba(255, 189, 157, 0.85) 0%,
      rgba(189, 63, 1, 0.85) 100%
    );
    transform: scale(1.05);
  }
`;

export const ResponsiveDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150vh;

  @media (max-width: 1024px) {
    height: 150vh;
  }

  @media (max-width: 768px) {
    height: 280vh;
  }

  @media (max-width: 480px) {
    height: 280vh;
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
