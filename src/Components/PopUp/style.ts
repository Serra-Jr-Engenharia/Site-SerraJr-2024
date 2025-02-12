import styled from "styled-components";
import backgroung from "../../Assets/background-popup.jpg"

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  width: 70%;
  height: 80%;
  text-align: center;
  position: relative;

  background-image: url(${backgroung});
  background-size: cover;   
  background-position: center;  
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: default;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;


export const Image = styled.img`
  width: 15%;
  margin-bottom: 7%;
  position: absolute;
  transform: translateY(-50%); 
  z-index: 2;
`

export const Title = styled.p`
  position: absolute;
  top: 2%;
  color: #000D1A;
  font-size: 2.5rem;
  margin-bottom: 150px;
  margin-top: 0;
`

export const InfoContent = styled.div`
  margin-top: 20%;
  background-color: #000D1A;
  width: 85%;
  border-radius: 10px;
  z-index: 1;
`

export const Info = styled.p`
  color: white;
  padding: 20px;
  font-size: 0.9rem;
  
`

export const Members = styled.p`
  color: #000D1A;
  margin: 0;
`

export const MembersTitle = styled.p`
  font-size: 1.2rem;
`

export const Member = styled.li`
  border-radius: 8px;
  text-align: left;
`

export const MembersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 5px;                        
  list-style: none;             
  padding: 0;
  margin: 10px 0 0 0;
  width: 100%;                 
  box-sizing: border-box;
`;


export const Button = styled.button`
  background: linear-gradient(90deg, #FFA726, #EF6C00);
  background-size: 200% 100%;      
  color: #FFFFFF;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-position 0.4s ease-in-out, box-shadow 0.3s ease;

  margin-top: 2%;

  &:hover {
    background-position: right center;   
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const LinkedinImg = styled.img`
  width: 10%; 
  padding-right: 10px;
`

export const Linkedin = styled.a`

`





