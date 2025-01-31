import { Link } from "react-router-dom";

import { 
    LinkContainer,
    MobileMenu
} from './style';

interface MobileNavBar{
    status: boolean
    toogle: Function
}

const MobileNavBar: React.FC<MobileNavBar> = ({status, toogle}) =>{

    return(
        <MobileMenu activeStyle={status}>
            <LinkContainer>
                <Link onClick={() => toogle(!status)} to='/'>Home</Link>
            </LinkContainer>
            <LinkContainer>
                <Link onClick={() => toogle(!status)} to='/quemSomos'>Sobre Nós</Link>
            </LinkContainer>
            <LinkContainer>
                <Link onClick={() => toogle(!status)} to='/computacao'>Computação</Link>
            </LinkContainer>
            <LinkContainer>
                <Link onClick={() => toogle(!status)} to='/mecanica'>Mecânica</Link>
            </LinkContainer>
            <LinkContainer>
                <Link onClick={() => toogle(!status)} to='/serralab'>Serra Lab</Link>
            </LinkContainer>
            <LinkContainer>
                <Link onClick={() => toogle(!status)} to='/contatos'>Contatos</Link>
            </LinkContainer>
        </MobileMenu>
    )
}
 
export default MobileNavBar