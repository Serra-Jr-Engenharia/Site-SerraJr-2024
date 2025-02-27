import styled from "styled-components";
import background from "../../Assets/Global/bannerOnda2.png";

export const Banner = styled.div`
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

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const BannerImg = styled.img`
  width: 500px;
  height: 300px;
  margin-right: 5%;

  @media (max-width: 850px) {
    width: 400px;
    height: 250px;
  }

  @media (max-width: 400px) {
    width: 300px;
    height: 200px;
  }
`;

export const Titulo = styled.p`
  margin-top: 10%;
  font-family: "Poppins";
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  color: white;
  font-weight: 1000%;
  margin-right: 50%;
`;

export const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

export const Content = styled.div`
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

export const Card = styled.div`
  width: 300px;
  height: 350px;
  padding: 15px;
  background-color: #000d19;
  border-radius: 15px;

  @media (max-width: 400px) {
    width: 250px;
    height: auto;
  }
`;
export const Text = styled.p`
  color: #9e9e9e;
  text-align: justify;
`;
export const Slogan = styled.h2`
  font-size: 55px;
  font-family: "Poppins";
  font-weight: 600;
  display: flex;
  margin-top: 8%;
  color: white;
  @media (max-width: 400px) {
    font-size: 40px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 5%;
  gap: 20px;
  margin: 100px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    margin-top: 50px;
    margin-bottom: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
`;

export const ImgContainer = styled.div`
  width: 100%;
  position: relative;

  z-index: -1;
`

export const ImageLeft = styled.img`
  position: absolute;
  top: 300px;
  left: 0;
  width: 150px;
  height: 400px;
  transform: rotateY(180deg);

  @media (max-width: 1100px) {
    display: none;
  }

`;

export const ImageRight = styled.img`
  position: absolute;
  right: 0;
  top: -300px;
  width: 150px;
  height: 400px;

  @media (max-width: 1100px) {
    display: none;
  }
`;
