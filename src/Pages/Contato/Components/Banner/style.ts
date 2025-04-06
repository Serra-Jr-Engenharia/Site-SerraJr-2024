import styled from "styled-components";
import background from "../../../../Assets/Global/bannerOnda3.png";

export const Presentation = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 65vh;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 65vh;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 65vh;
  }
`;

export const Slogan = styled.p`
  font-size: 3rem;
  font-family: "Poppins";
  font-weight: 600;
  display: flex;
  margin: 0;
  margin-top: 100px;

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-top: 0;
  }
`;

export const BannerImg = styled.img`
  width: 400px;
  height: 400px;

  @media (max-width: 600px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 450px) {
    width: 250px;
    height: 250px;
  }
`;
