import { Content, ErroTexto, Paragraph, ErrorContent } from './style'
import erro from "../../Assets/erro.png";

export default function ErroPage() {
    return (
        <div>
            <Content>
                <ErrorContent>
                    <img src={erro}/>
                    <ErroTexto>ERROR 404</ErroTexto>
                    <Paragraph>Página não encontrada!</Paragraph>
                </ErrorContent>
            </Content>
        </div>
    );
}