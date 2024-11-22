import styled from 'styled-components';
import { width } from '../../../../Services/config'

interface Props {
    activeStyle?: boolean
}


export const HeaderUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* background-color: red; */
    @media screen and (min-width: ${width.extraLargeDesktop}){
        width: 50%;
        height: 50%;
    }
`;

export const HeaderText = styled.p`
    color: #fff;
    font-size: 1.4rem;

    @media screen and (min-width: ${width.largeDesktop}){
        font-size: 2.3rem;    
    }
    @media screen and (min-width: ${width.extraLargeDesktop}){
        font-size: 3.3rem;    
    }
`;

export const SubMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
    cursor: pointer;
    
`;

export const SubMenuImg = styled.img<Props>`
    margin-top: 10px;
    margin-left: 2px;
    ${({activeStyle}) => activeStyle ?
        `transform: rotate(-180deg);
        transition: 0.5s;`
        :
        `transform: rotate(0deg);
        transition: 0.5s;`
    }
    @media screen and (min-width: ${width.extraLargeDesktop}){
        width: 1vw;
    }
`;

export const SubMenuContainerFather = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubMenuContainerSon = styled.div<Props>`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #999999;
    top: 17vh;
    width: 20vw;
    border-radius: 0px 0px 20px 20px;
    
    ${({activeStyle}) => activeStyle ?
        `opacity: 0.9;
        visibility: visible;
        transition: opacity 0.5s;`
        :
        `opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s;`
    }

    @media screen and (min-width: ${width.largeNotebook}){
        width: 10vw;
    }

    @media screen and (min-width: ${width.largeDesktop}){
        width: 15vw;
    }
`;

export const SubMenuLine = styled.div`
    width: 95%;
    height: 0.4px;
    background-color: #fff;
`;

export const LinkStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    &:hover{
        opacity: 0.7;
    }
`;

export const HeaderLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    margin-left: 2rem;  
    text-decoration: none;
    list-style: none;

    a{
        text-decoration: none;
        color: white;
        list-style: none;
        
        @media screen and (min-width: ${width.largeDesktop}){
            font-size: 2.3rem;    
        }
        @media screen and (min-width: ${width.extraLargeDesktop}){
            font-size: 3.3rem;    
        }
    }
    
    @media screen and (min-width: ${width.extraLargeDesktop}) {
        width: 100%;
        height: 100%;
        font-size: 2.5rem;
    }
`;

export const HeaderUlContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 150%;
    margin-right: 10%;
    margin-top: 0%;

    @media screen and (max-width: 1023px){
        display: none;
    }
`;

export const HeaderTextSection = styled.div`
    width: 100%;
    text-align: left;
    padding: 20px 0;
    background-color: #0a0e17; 
    color: #fff; 

    h1 {
        font-size: 1.8rem;
        font-weight: bold;
    }

    @media screen and (min-width: ${width.largeDesktop}) {
        h1 {
            font-size: 2.4rem; 
        }
    }

    @media screen and (min-width: ${width.extraLargeDesktop}) {
        h1 {
            font-size: 3rem; 
        }
    }
`;