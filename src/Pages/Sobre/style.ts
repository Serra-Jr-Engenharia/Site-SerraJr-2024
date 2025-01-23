import styled from "styled-components";
import background from '../../Assets/bannerOnda2.png'

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
`;

export const BannerImg = styled.img`
  width: 500px;
  height: 300px;
  margin-right: 5%;
`;

// export const Imagem = styled.img`
//   display: block;
//   flex-direction: column;
//   justify-content: left;
//   width: 40%;
//   margin-right: 20%;
//   margin-top: 9%;
// `;

export const Titulo = styled.p`
  margin-top: 10%;
  font-family: 'Poppins';
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
`

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
  background-color: #000D19;
  border-radius: 15px;
`
export const Text = styled.p`
  color: #9E9E9E;
  text-align: justify;
`
export const Slogan = styled.h2`
  font-size: 55px;
  font-family: 'Poppins';
  font-weight: 600;
  display: flex;
  margin-top: 8%;
  color: white;
`

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 100px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const IconContainer = styled.div`
  width: 100%;
`


export const ImageLeft = styled.img`
  position: absolute;
  width: 450px;
  height: auto;
  top: 600px;
  margin-left: 1600px;
`;

export const ImageRight = styled.img`
  position: absolute;
  width: 450px;
  height: auto;
  top: 1100px;
  margin-right: 1500px;
`;