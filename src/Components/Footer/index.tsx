//styles
import {
  LinhaHorizontal,
  FooterContainer,
  FooterStyle,
  InfosSection,
  InfoSection,
  LogosSection,
  LinkToWebsite,
  CopyRight,
} from "./style";

//icones
import LogoSerra from "../../Assets/Global/LogoSerra.svg";
import Instagram from "../../Assets/Global/instagram.svg";
import Facebook from "../../Assets/Global/facebook.svg";
import Linkedin from '../../Assets/Global/linkedin.svg'
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterStyle>
        <LogosSection>
          <img
            src={LogoSerra}
            alt="Logo da serra junior"
            width={60}
            height={"auto"}
            style={{ marginRight: "20px" }}
          />
          <Link
            to={"https://www.instagram.com/serrajreng/?hl=pt"}
            target="blank"
          >
            <img
              src={Instagram}
              alt="Logo do instagram"
              width={25}
              height={"auto"}
            />
          </Link>

          <Link
            to={"https://www.facebook.com/serrajreng/?locale=pt_BR"}
            target="blank"
          >
            <img
              src={Facebook}
              alt="Logo do Facebook"
              width={25}
              height={"auto"}
            />
          </Link>
          <Link
            to={
              "https://www.linkedin.com/company/serra-jr--engenharia/?originalSubdomain=br"
            }
            target="blank"
          >
            <img
              src={Linkedin}
              alt="Logo do linkedin"
              width={25}
              height={"auto"}
            />
          </Link>
        </LogosSection>

        <InfosSection>
          <InfoSection>
            <h4>CONTATO</h4>
            <Link to={"SERRAJR@IPRJ.UERJ.BR"} style={{ color: "white " }}>
              <LinkToWebsite>SERRAJR@IPRJ.UERJ.BR</LinkToWebsite>
            </Link>
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
      <LinhaHorizontal />

      <CopyRight>
        <div>
          <p>2024 © SERRA JR. ENGENHARIA </p>
        </div>
        <div>
          <p>TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;
