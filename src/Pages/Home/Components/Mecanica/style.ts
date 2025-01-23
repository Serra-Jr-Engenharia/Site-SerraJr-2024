import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 50px;

    width: 100%;
`;

export const LeftContent = styled.div `
    width: 50%;
`;

export const RightContent = styled.div `
`;

export const Title = styled.p `
    font-size:36px;
    color: #000D1A;
    font-weight: 800;
    margin: 20px 0;



`;

export const Text = styled.p `
    color: #505050;
    
    
    


`;

export const Card = styled.div `
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
    width: 350px;
    height: 60px;
    margin: 20px 0px;
    color: #000D19;
    padding: 0 15px;
   
    
    
    


`;

export const CardContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;



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
    transition: all 0.3s ease-in-out;

    &: hover{
        background-color: #04ADD7;
        transform: scale(1.05);
        box-shadow: 0px 5px 15px rbga( 0, 0, 0, 0.3);
    }

    &:active{
        transform: scale(0.98);
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    }

`;

export const Image = styled.img `
    margin-top: -100px;
    margin-left: 125px;
    width: 450px;

`;

export const CardText = styled.div `
    margin: 0; 

    
`;

export const Icon = styled.img `
    width: 50px;
    height: 50px;
    margin-right: 15px;
    
    

    
`;
