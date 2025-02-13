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
`;

export const Input = styled.input`
  width: 450px;
  padding: 10px 0;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  background: transparent;
  font-size: 16px;
  outline: none;
  @media (max-width: 1150px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 350px;
  }
  @media (max-width: 450px) {
    width: 250px;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: -8px;
  margin-bottom: 10px;
  display: block;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;
  width: 500px;

  @media (max-width: 1150px) {
    width: 500px;
    margin-bottom: 50px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
  @media (max-width: 450px) {
    width: 250px;
  }
`;

export const Textarea = styled.textarea`
  width: 450px;
  padding: 10px 0;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  background: transparent;
  font-size: 16px;
  outline: none;
  resize: none;

  @media (max-width: 1150px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
  @media (max-width: 450px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  align-self: center;
  width: 60%;
  margin-top: 10px;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(
      to right bottom,
      rgb(7, 38, 70),
      #04add7
    ); // Gradiente invertido
    transform: scale(1.01);
  }

  @media (min-width: 1150px) {
    align-self: self-start;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: 5% 0;

  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 500px;
  gap: 20px;

  @media (max-width: 1150px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
  @media (max-width: 450px) {
    width: 250px;
  }
`;

export const InformationCont = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
`;

export const InformationImg = styled.img`
  width: 40px;
  margin-right: 12px;
`;

export const InformationText = styled.p`
  color: #000;
  margin: 0;
`;
