import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1000px;
    margin: 100px 0;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 300px;
    margin: 20px;
    gap: 20px;
    padding: 50px 100px 50px 100px;
    border-radius: 12px;
    margin-bottom: 20px;
    background-color: #000D1A;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
`

export const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    color: black;
    margin: 0;
`

export const TextAbout = styled.p`
    font-weight: 600;
    font-size: 16px;
    text-align: justify;
    width: 400px;
    color: white;
`
export const Image = styled.img`
    border-radius: 12px;
    width: 90%;
    height: 100%;
`

export const Retangulo = styled.hr`
    margin: 0;
    width: 400px;
    height: 5px;
    background-color: #000000;
    border: none;
`

export const Botao = styled.button`
    background-color: none;
    margin: 0;
    border: none;
    z-index: 10;

    :hover{
        cursor: pointer;
        opacity: 90%;
        transition: 3ms;
    }

`

