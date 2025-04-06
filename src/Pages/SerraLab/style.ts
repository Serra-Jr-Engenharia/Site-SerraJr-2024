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
  height: 250px;
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


  &:hover p.title-card {
    color: white;
  }

  &:hover p.description-card {
    color: white;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 250px;
  }
`;

export const CardSpecialAux = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px;

  .title-card {
    color: black;
    font-size: 1.6rem;
    font-weight: bold;
    margin-left: 20px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
  }
  } 

  img {
    max-width: 17%;

  }

  .description-card {
    text-align: justify;
    color: gray;
    font-size: 1rem;
    margin-left: 35px;

    @media (max-width: 768px) {
      margin-left: 30px;
  }

  }

  .setinha {
    width: 42px;
    height: 42px;
    margin-left: 20px;

    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
      margin-left: 10px;
    }
  }



`

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  text-align: center;
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

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
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
  height: 100%;
  justify-content: center;
  gap: 80px;
  padding: 20px;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 20px
  }
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
