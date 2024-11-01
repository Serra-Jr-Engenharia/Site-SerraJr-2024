//styles
import { FooterStyle, InfosSection, InfoSection, LogosSection } from "./style"

//icones
import LogoSerra from "../../Assets/Global/LogoSiteSerraJr.svg"
import Instagram from "../../Assets/Global/instagram.svg"
import Facebook from "../../Assets/Global/facebook.svg"
import Linkedin from "../../Assets/Global/linkedin.svg"

const Footer: React.FC = () => {
    return (
        <FooterStyle>
            
            <LogosSection>
                <img src={LogoSerra}  alt="Logo da serra junior"/>
                <img src={Instagram} alt="Logo do instagram" />
                <img src={Facebook} alt="Logo do Facebook" />
                <img src={Linkedin} alt="Logo do linkedin" />
            </LogosSection>
            
            <InfosSection> 

                <InfoSection>
                    <h4>CONTATO</h4>
                    <p>SERRAJR@IPRJ.UERJ.BR</p>
                </InfoSection>
            
                <InfoSection>
                    <h4>ATENDIMENTO</h4>
                    <p>SEGUNDA À SEXTA</p>
                    <p>9H ÀS 19H</p>
                </InfoSection>

                <InfoSection>
                    <h4>INSTITUCIONAL</h4>
                    <p>SERRA JR ENGENHARIA</p>
                </InfoSection>

            </InfosSection>

        </FooterStyle>
    )
}

export default Footer