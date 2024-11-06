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
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;

    margin-bottom: 20px;
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin: 0;
`

export const TextAbout = styled.p`
    font-weight: 600;
    font-size: 16px;
    text-align: justify;
`
export const Image = styled.img`
    border-radius: 12px;
    width: 90%;
    height: 100%;
`

export const Retangulo = styled.hr`
    margin: 0;
    width: 100%;
    height: 5px;
    background-color: #D9D9D9;
    border: none;
`