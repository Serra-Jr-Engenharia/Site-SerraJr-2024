import React, { useState } from 'react'


import ArrowHeader from "../../../../Assets/Global/arrow-header.svg"
import { Link } from "react-router-dom";

import {  
    HeaderUl,
    HeaderLi,
    HeaderUlContainer,
    HeaderText,
    SubMenuContainer,
    SubMenuImg,
    SubMenuContainerFather,
    SubMenuContainerSon,
    LinkStyle
} from './style.ts';

const DesktopNavBar: React.FC = () =>{
    const [subMenu, setSubMenu] = useState(false)

    return(
        <>
        <HeaderUlContainer>
            <HeaderUl>
                <HeaderLi>
                    <Link to='/'>Home</Link>
                </HeaderLi>
                <HeaderLi>
                    <Link to='/quemSomos'>Sobre Nós</Link>
                </HeaderLi>
                <HeaderLi>
                    <SubMenuContainer onClick={() => setSubMenu(!subMenu)}>
                        <SubMenuContainerFather>
                            <HeaderText>Serviços</HeaderText>
                            <SubMenuImg activeStyle={subMenu} src={ArrowHeader} alt="Seta" />
                        </SubMenuContainerFather>
                        <SubMenuContainerSon activeStyle={subMenu}>
                            <LinkStyle>
                                <Link to='/computacao'>Computação</Link>
                            </LinkStyle>
                            {/* <SubMenuLine color="white"/> */}
                            <LinkStyle>
                                <Link to='/mecanica'>Mecânica</Link>
                            </LinkStyle>
                            <LinkStyle>
                                <Link to='/'>Serra Lab</Link>
                            </LinkStyle>
                        </SubMenuContainerSon>
                    </SubMenuContainer>
                </HeaderLi>
                <HeaderLi>
                    <Link to='/contatos'>Contato</Link>
                </HeaderLi>
            </HeaderUl>
        </HeaderUlContainer>
</>
    )
}
 
export default DesktopNavBar