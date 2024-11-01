import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 637px;
    border-radius: 22px;
    background-color: #000D1A;
    margin: 20px;
    gap: 30px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    gap: 20px;
    width: 50%;
    color: white;
`

export const Titulo = styled.h1`
    font-weight: bold;
    font-size: 40;
`

export const TextAbout = styled.p`
    font-weight: bold;
    font-size: 20;
`

export const Image = styled.img`
    display: flex;
    text-align: center;
    justify-content: center;
    border-radius: 22px;
    width: 500px;
    height: 500px;
`