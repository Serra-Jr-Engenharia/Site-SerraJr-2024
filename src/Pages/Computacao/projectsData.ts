import cervejelas from "../../Assets/Computacao/Cervejelas.png";
import tmf from "../../Assets/Computacao/TMF.png";
import ods from "../../Assets/Computacao/odsquiz 1.png";
import prownovar from "../../Assets/Computacao/prownovar.png";
import etar from "../../Assets/Computacao/etarserra 2023.png";
import friburguense from "../../Assets/Computacao/Friburguense.svg";
import ppgctm from "../../Assets/Computacao/Logo-PPG-CTM.png"
import serra from "../../Assets/serra.png"

interface Member {
    name: string;
    link: string;
  }
  
export interface Project {
    title: string;
    img: string;
    description: string;
    link: string;
    info: string;
    members: Member[]; 
}
  

export const projectsData: Project[] = [
    { 
        title: "Cervejelas", 
        img: cervejelas, 
        description: "Cervejelas 2023", 
        link:"https://cervejelas.com.br/", 
        info:"Site desenvolvido para o evento CervejElas 2023, que foi um encontro de mulheres produtoras de cerveja e ocorreu entre 21 e 22 de janeiro em Teresópolis. O site foi pensado prezando pela simplicidade e clareza ao mostrar as informações, por meio de uma landing page com design moderno e limpo. Contou com um cronômetro em contagem regressiva até o dia do evento, mapas indicando o local de realização, informações sobre atrações, ferramentas de acessibilidade (VLibras), entre outras coisas.",
        members: [
            { name: "André Barros", link: "https://linkedin.com" },
            { name: "Caio Bindella", link: "https://linkedin.com" },
            { name: "Victor Luis", link: "https://linkedin.com" },
            { name: "Kauan Peçanha", link: "https://linkedin.com" },
            { name: "Carolina Dornelas", link: "https://linkedin.com" },
            { name: "Davidson", link: "https://linkedin.com" },
            { name: "Gustavo Curty", link: "https://linkedin.com" },
            { name: "Vinicius Monnerat", link: "https://linkedin.com" },
          ],
    },
    { 
        title: "PPG-CTM", 
        img: ppgctm, 
        description: "Programa de Pós-Graduação em Ciência e Tecnologia de Materiais", 
        link:"https://www.ppgctm.iprj.uerj.br/", 
        info:"Projeto para desenvolvimento de um website com intuito de apresentar o programa de pós-graduação em Ciência e Tecnologia dos Materiais. O objetivo principal do projeto é desenvolver uma interface que exiba os conteúdos presentes no programa de Pós-Graduação em Ciência e Tecnologia dos Materiais, tal como notícias, objetivos, apresentação dos laboratórios com fotos e uma breve descrição, linhas de pesquisa, os docentes responsáveis e um meio de contato. Além disso, foi aplicada a tradução da página para Inglês e Espanhol.", 
        members: [
            { name: "Carolina Dornelas", link: ""},
            { name: "Felipe Carrancho", link: ""},
            { name: "Gabrielle Ferreira", link: ""},
            { name: "Guilherme Alves", link: ""},
            { name: "Gustavo Curty", link: ""},
            { name: "Gustavo Dias", link: ""},
            { name: "Luís Felipe Braido", link: ""}
          ],
    },
    { 
        title: "Site Serra Jr 2022", 
        img: serra, 
        description: "2a versão", 
        link:"https://www.serrajr.eng.br/", 
        info:"O objetivo do projeto era reestruturar o site da Serra Jr. Engenharia, visto que o site antigo estava bem lento e com um design ultrapassado.", 
        members: [
            { name: "Caio Bindella", link: ""},
            { name: "Carolina Dornelas", link: ""},
            { name: "Felipe Anderson", link: ""},
            { name: "João Matheus", link: ""},
            { name: "Manoel Rodrigues", link: ""},
            { name: "Thiago Paixão", link: ""},
            { name: "Victor Luis", link: ""},
          ],
    },
    { 
        title: "ODS Quiz", 
        img: ods, 
        description: "Hackathon Hack2030", 
        link:"https://odsquiz.netlify.app/", 
        info:"Site desenvolvido pela equipe Serra HackClub durante o Hackaton Hack2030, ocorrido em novembro de 2022 no Rio de Janeiro e organizado pela UERJ. O objetivo do hackaton foi gerar soluções que facilitassem a gestão e acompanhamento dos Objetivos de Desenvolvimento Sustentável da ONU no Rio de Janeiro. O site apresenta todo um sistema de cadastro de usuários, iniciativas e um quiz onde qualquer pessoa pode responder e ter um feedback do quanto o seu entorno está alinhado com os ODS.", 
        members: [
            { name: "Victor Luis", link: ""},
            { name: "Caio Bindella", link: ""},
            { name: "Kauan Peçanha", link: ""},
            { name: "Manoel Rodrigues", link: ""},
          ],
    },
    { 
        title: "Projeto Friburguense", 
        img: friburguense, 
        description: "Friburguense Atlético Clube", 
        link:"", 
        info:"", 
        members: [
            { name: "", link: ""}
          ],
    },
    { title: "Projeto TMF",
        img: tmf,
        description: "Cervejelas 2023",
        link:"",
        info:"",
        members: [
            { name: "", link: ""}
          ],
        },

    { 
        title: "ETArserra 2022",
        img: etar,
        description: "Cervejelas 2023",
        link:"",
        info:"",
        members: [
            { name: "", link: ""}
          ],
        },

    { 
        title: "Prownovar",
        img: prownovar,
        description: "Cervejelas 2023",
        link:"https://serrajrengenharia.github.io/prownovar-project/",
        info:"",
        members: [
            { name: "", link: ""}
          ],
    },

];