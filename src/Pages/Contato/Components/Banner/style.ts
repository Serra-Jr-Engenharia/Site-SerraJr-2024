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
  font-size: 55px;
  font-family: 'Poppins';
  font-weight: 600;
  display: flex;
  margin-top: 8%;
  margin-left: 5%;
`;

export const BannerImg = styled.img`
  width: 400px;
  height: 400px;
  margin-right: 5%;
`;
