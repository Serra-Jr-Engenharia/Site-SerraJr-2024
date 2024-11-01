import { HeaderStyle } from "./style";
import LogoSiteSerra from "../../Assets/Global/LogoSiteSerraJr.svg"

const Header: React.FC = () => {
    return (
        <HeaderStyle>
            <div className="HeaderContainer">
                <div className="Logo-Serra">
                    <img src={LogoSiteSerra} alt="Logo Serra Jr."/>
                    <p>Header</p>
                </div>

                <div className="Pag-links">
                    <a href="/home">HOME</a>
                    <a href="/sobre-nos">SOBRE NÓS</a>
                    <a href="/contatos">CONTATO</a>
                    <a href="/servicos">SERVIÇOS</a>
                </div>
            </div>      

            <div className="MainHeader">
                <p>Engrenando ideias, inovando o mercado.</p>
            </div>

        </HeaderStyle>
    )
}

export default Header