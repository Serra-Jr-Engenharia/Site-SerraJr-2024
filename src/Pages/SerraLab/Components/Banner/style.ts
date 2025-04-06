import styled from "styled-components";
import background from '../../../../Assets/Global/bannerOnda3.png'

export const Presentation = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 65vh;
  gap: 300px;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    gap: 10px;
  }
`;

export const Slogan = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  margin-top: 50px;

  @media (max-width: 850px) {
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
    height: fit-content;
  }

`;

export const BannerImg = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 2%;

  @media (max-width: 850px) {
    width: 250px;
    height: 250px;
    margin: 0;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 3.44rem;
  font-family: "Poppins";
  font-weight: 600;
  margin: 0;
  margin-top: 20px;

  @media (max-width: 850px) {
    margin: 0;
  }
`
