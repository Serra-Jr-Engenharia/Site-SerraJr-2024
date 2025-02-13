import styled from "styled-components";


export const Content = styled.div`

  color: white;
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  width: 350px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  background: transparent;
  font-size: 16px;
  outline: none;
`

export const Textarea = styled.textarea`
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  background: transparent;
  font-size: 16px;
  outline: none;
  resize: none;
`;

export const Button = styled.button`
  width: 60%;
  padding: 12px;
  margin-top: 20px;
  margin-left: 70px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
  background: linear-gradient(to right bottom,rgb(7, 38, 70), #04ADD7);  // Gradiente invertido
  transform: scale(1.01); 
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: 5% 0;
`

export const InformationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-right: 2%;
`

export const InformationCont = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 5%;
`

export const InformationImg = styled.img`
  width: 50px;
  margin-right: 10px;
  margin-left: 20%;
`

export const InformationText = styled.p`
  color: #000;;

`