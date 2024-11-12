import styled  from "styled-components";
import { width } from "../../../Services/config";

export const HeaderImg = styled.img`
    width: 12rem;
    height: 11rem;
    margin-left: 25%;

    @media screen and (max-width: ${width.mobile}){
        width: 6rem;
        height: 5rem;
    }

    @media screen and (min-width: ${width.largeDesktop}){
        width: 20rem;
        height: 19rem;
        margin-left: 50%;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}){
        width: 30rem;
        height: 29rem;
        margin-left: 60%;
    }
    
`;

export const HeaderStyle = styled.div`
    width: 100%;
    height: 17vh;
    background-color: #001830;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${width.notebook}){
        justify-content: space-between;
        align-items: center;
    }
`;

export const MenuButtonContainer = styled.div`
    margin-right: 7%;
`;
`;  