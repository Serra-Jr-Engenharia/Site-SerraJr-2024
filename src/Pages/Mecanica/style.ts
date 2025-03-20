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
  height: 200px;
`;

export const StyledHr = styled.hr`
  border: none;
  height: 4px;
  background-color: rgba(0, 13, 26, 0.15);
  width: 100%;
  opacity: 5;
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
  position: relative;
  top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); //
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
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out; // Transição suave no hover
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  margin-bottom: 5rem;

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
  background: linear-gradient(90deg, #ffbd9d 0%, #bd3f01 100%);
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
      rgba(255, 189, 157, 0.85) 0%,
      rgba(189, 63, 1, 0.85) 100%
    );
    transform: scale(1.05);
  }
`;
