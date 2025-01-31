import styled from "styled-components";
import { width } from "../../../../Services/config";

interface Props{
    active?: boolean
    type?: string
}

export const Line = styled.div<Props>`
    height: 3px;
    background-color: #fff;
    width: 30px;
    margin: 3px;

    ${({active, type}) => active && type === 'first-line' ?
        `transform: rotate(45deg);
        position: absolute;`
        : active && type === 'mid-line' ?
        `display: none;`
        : active && type === 'last-line' ?
        `transform: rotate(-45deg);
        position: absolute;`
        :
        null
    }

    transition: 0.2s;
`;

export const MenuButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: transparent;
    border: none;
    display: none;
    transition: 0.3s;

    &:hover{
        opacity: 0.6;
        cursor: pointer;
    }
    @media screen and (max-width: ${width.notebook}){
        display: flex;
        margin-right: 20px;
    }
`;