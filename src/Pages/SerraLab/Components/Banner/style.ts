import styled from "styled-components";
import background from '../../../../Assets/bannerOnda3.png'

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
  height: 65vh;
`;



export const Slogan = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  margin-top: 50px;
`;

export const BannerImg = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 2%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 60px;
  font-weight: 700;
  margin: 0;
  margin-top: 20px;
`
