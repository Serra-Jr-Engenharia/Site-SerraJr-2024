import styled  from "styled-components";
import { width } from '../../../../Services/config'

interface Props {
    activeStyle?: boolean
}

export const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    text-decoration: none;
    list-style: none;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    &:hover{
        opacity: 0.7;
    }

    a{
        text-decoration: none;
        color: white;
        list-style: none;
        opacity: 1;
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`;

export const MobileMenu = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(4, 2, 28);
    border-radius: 0px 0px 20px 20px;
    position: absolute;
    top: 17vh;
    right: 0;
    width: 40vw;
    margin-right: 10px;
    color: #fff;

    ${({activeStyle}) => activeStyle ?
        `opacity: 0.9;
        visibility: visible;
        transition: opacity 0.5s;`
        :
        `opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s;`
    }

    @media screen and (min-width: ${width.notebook}){
        visibility: hidden;
    }   
`;