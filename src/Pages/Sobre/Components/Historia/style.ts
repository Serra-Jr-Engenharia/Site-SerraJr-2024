import { styled } from "styled-components";
import { SwiperSlide } from 'swiper/react';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1000px;
    max-width: 100%;
    margin: 100px 0;
    position: relative;

  /* Estilizando setas */
    .swiper-button-next,
    .swiper-button-prev {
        color: white;
        padding: 8px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        transition: all 0.3s;

        &:hover {
            color: #04add7;
            transform: scale(1.2);
        }
    }

  /* Estilizando bolinhas da paginação */
    .swiper-pagination-bullet {
        background-color: gray;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        opacity: 0.7;

        &:hover {
            background-color: #04add7;
            transform: scale(1.2);
        }

        &.swiper-pagination-bullet-active {
            background-color: white;
            transform: scale(1.2);
        }
    }

    @media (max-width: 1100px) {
        .swiper-button-next,
        .swiper-button-prev {
            display: none;
        }
    }

`;


export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  gap: 20px;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    
  }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1000px;
    height: 400px;
    margin: 20px;
    gap: 20px;
    border-radius: 12px;
    margin-bottom: 20px;
    background-color: #000D1A;

    @media(max-width: 1100px) {
        padding: 30px 0px;
        width: 90%;
        height: fit-content;
    }
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
    font-size: 18px;
    text-align: justify;
    width: 400px;
    color: white;

    @media (max-width: 1100px) {
        width: 80%;
        font-size: 14px;
        margin-bottom: 50px;
    }

`
export const Image = styled.img`
    border-radius: 12px;
    height: 80%;

    @media(max-width: 1100px) {
        height: 100%;
        width: 80%;
    }

`

export const Retangulo = styled.hr`
    margin: 0;
    width: 400px;
    max-width: 80%;
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
