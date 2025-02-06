import styled from "styled-components";

interface ContainerProps {
    isExpanded: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${(props) => (props.isExpanded ? "230px" : "100px")};
  height: 350px;
  background: ${(props) =>
  props.isExpanded
    ? "#000D1A"
    : "linear-gradient(to bottom, #04ADD7, #000D1A)"};
  color: #fff;
  border-radius: ${(props) => (props.isExpanded ? "16px" : "12px")};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.isExpanded ? "center" : "flex-end")};
  overflow: hidden;
  font-family: Poppins;
  font-weight: 600;
`;

export const Image = styled.img<ContainerProps> `
    width: 60%;
    display: ${(props) => (props.isExpanded ? "block" : "none")};
    margin-top: ${(props) => (props.isExpanded ? "15%" : "0")}
` 

export const SaibaMais = styled.img `
    width: 20%;
` 

export const TopRightImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px; 
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1); 
  }
`;


export const Title = styled.p<ContainerProps> `
    writing-mode: ${(props) => (props.isExpanded ? "horizontal-tb" : "vertical-rl")};
    padding-top: ${(props) => (props.isExpanded ? "0" : "20px")};
    margin:  ${(props) => (props.isExpanded ? "0" : "0")};
    font-size:  1.5rem;
    text-transform: uppercase;
    opacity: 1;
    transform:  rotate(${(props) => (props.isExpanded ? "0deg" : "180deg")});
    transition: font-size 0.5s ease, margin-top 0.5s ease;
    text-align: center;
    line-height: 30px;
` 

export const Description = styled.p<ContainerProps> `
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
    display: block;
    width: 90%;
` 

export const Button = styled.button <ContainerProps>`
    margin-top: auto;
    padding: 10px 15px;
    border: none;
    border-radius: 20px;
    background: #fff;
    color: #000;
    width: 70%;
    cursor: pointer;
    font-weight: bold;
    display: ${(props) => (props.isExpanded ? "flex" : "none")};
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: ${(props) => (props.isExpanded ? "15%" : "0")};
    text-align: center;
    font-size: 0.8rem; 
` 