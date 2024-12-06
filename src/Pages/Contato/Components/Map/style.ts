import styled from "styled-components";

export const Container = styled.div`
    height: 50vh;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 7%;

    @media screen and (max-width: 390px) {
        width: 80%;
    }

    @media screen and (max-width: 500px) {
        width: 80%;
    }
`;

export const Iframe = styled.iframe`
    margin: 0;
    border: 0;
`;