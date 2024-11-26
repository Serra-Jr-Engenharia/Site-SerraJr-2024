import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const LeftContent = styled.div `
    width: 50%;

`;

export const RightContent = styled.div `
    margin-right: 100px;


`;

export const Title = styled.p `
    font-size:36px;
    color: #000D1A;
    font-weight: 800;
    margin: 20px 0;


`;

export const Text = styled.p `
    color: #505050;
    font-size: 18px;
    width: 800px;


`;

export const Card = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
    width: 300px;
    height: 60px;
    margin: 20px 0px;
    color: #000D19;
    padding: 20px 0px;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    


`;

export const CardContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 700px;



`;

export const Button = styled.button `
    color: white;
    background-color: #000D19;
    border-radius: 10px;
    width: 350px;
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;

`;

export const Image = styled.img `
    margin-top: -70px;
    margin-left: 30px;
    width: 500px;

`;

export const Icon = styled.img `
    width: 60px;
    display: flex;
    margin-right: 10px;
    background-color: #000D19;
    border-radius: 100%;
    padding: 3px;
    



`;
