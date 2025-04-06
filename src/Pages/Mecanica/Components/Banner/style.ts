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
  gap: 50px;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    gap: 0;
  }
`;



export const Slogan = styled.p`
  font-size: 3.44rem;
  font-family: "Poppins";
  font-weight: 600;
  display: flex;
  margin-top: 8%;
  margin-left: 5%;
  color: white;

  @media (max-width: 850px) {
    font-size: 2.5rem;
    text-align: center;
    margin: 0;
    height: fit-content;
    
  }
`;

export const BannerImg = styled.img`
  width: 350px;
  height: 350px;
  margin-right: 5%;


  @media (max-width: 850px) {
    width: 300px;
    height: 300px;
    margin: 0;
  }
`;
