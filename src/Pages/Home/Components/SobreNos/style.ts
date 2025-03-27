import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 300px;
    margin: 20px;
    gap: 100px;
    padding: 50px 50px 80px 100px;
    border-radius: 12px;

    background-color: #000D1A;

    @media (max-width: 1100px) {
        padding: 40px 0;
        width: 90%;
        height: fit-content;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    @media (max-width: 1100px) {
        height: 80%;
        width: 80%;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin: 0 auto;

    @media (max-width: 1100px) {
        font-size: 18px;
    }

`

export const TextAbout = styled.p`
    font-weight: 600;
    font-size: 16px;
    text-align: justify;

    @media (max-width: 1100px) {
        font-size: 14px;
        width: 100%;
    }
    
`
export const Image = styled.img`
    border-radius: 12px;
    width: 90%;
    height: 100%;

    @media (max-width: 1100px) {
        display: none;
    }
`

export const Retangulo = styled.hr`
    margin: 0;
    width: 100%;
    height: 5px;
    background-color: #D9D9D9;
    border: none;
`
export const Button = styled.button `

`;
