import styled  from "styled-components";
import { width } from "../../../Services/config";

export const HeaderImg = styled.img`
    width: 12rem;
    height: 11rem;
    margin-left: 25%;

    @media (max-width: 1100px) {
        width: 9rem;
        height: 8rem;
    }

`;

export const HeaderStyle = styled.div`
    width: 100%;
    height: 17vh;
    background-color: #000D1A;
    display: flex;
    justify-content: left;
    align-items: center;

    @media screen and (max-width: ${width.notebook}){
        justify-content: space-between;
        align-items: center; 
    }
`;

export const MenuButtonContainer = styled.div`
    margin-right: 7%;
`;

export const HeaderTextSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: #000D1A;
    width: 100%;
    padding: 20px 0;
    color: #fff;
`;

    
