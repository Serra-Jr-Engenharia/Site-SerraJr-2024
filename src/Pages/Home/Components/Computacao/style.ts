import { styled } from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;

    @media (max-width: 1100px) {
        margin: 0;
    }
`

export const RightContent = styled.div `
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 10px;

    @media (max-width: 1100px) {
        width: 80%;
    }
`

export const LeftContent = styled.div `
    margin-right: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1100px) {
        display: none;
    }
`

export const Title = styled.p `
    font-size: 36px;
    color: #000D1A;
    font-weight: 800;
    margin: 20px 0;

    @media (max-width: 1100px) {
        text-align: center;
    }
`

export const Text = styled.p `
    color: #505050;
    text-align: justify;
`

export const Card = styled.div`

    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
    width: 320px;
    height: 60px;
    margin: 20px 0px;
    color: #000D19;
    padding: 0 15px;

    @media (max-width: 1100px) {
        margin: 0;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;

    @media (max-width: 1100px) {
        justify-content: center;
    }
`

export const Button = styled.button`
    color: white;
    background-color: #000D19;
    border: none;
    border-radius: 10px;
    width: 350px;
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
    background: linear-gradient(to right bottom,rgb(7, 38, 70), #04ADD7);  // Gradiente invertido
    transform: scale(1.01); 
}

    &:active {
        transform: scale(0.98);
    }

    @media (max-width: 1100px) {
        align-self: center;
    }
`

export const Image = styled.img`
    width: 450px;
    height: 400px;
`

export const Icon = styled.img`
    width: 50px;
    display: flex;
    margin-right: 10px;
`
