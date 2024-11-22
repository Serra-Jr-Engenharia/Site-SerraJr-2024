import styled from "styled-components";
import background from '../../../../Assets/bannerOnda.png'

export const Presentation = styled.div`
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
`;



export const Slogan = styled.div`
  display: block;
  justify-content: left;
  flex-direction: column;
  width: 55%;
  text-align: left;
  margin-right: 20%;
  margin-top: 3%;
`;

