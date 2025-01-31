import styled from "styled-components";
import background from '../../../../Assets/bannerOnda.png'

export const Presentation = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 80vh;

  @media (max-width: 1100px) {
    height: 40vh;
  }
`;

export const Slogan = styled.div`
  display: block;
  justify-content: left;
  flex-direction: column;
  width: 55%;
  text-align: left;
  margin-right: 20%;
  margin-top: 9%;

  @media (max-width: 1100px) {
    width: 80%;
    padding-left: 20px;
  }

`;

