import cervejelas from "../../Assets/Computacao/Cervejelas.png";
import tmf from "../../Assets/Computacao/TMF.png";
import ods from "../../Assets/Computacao/odsquiz 1.png";
import prownovar from "../../Assets/Computacao/prownovar.png";
import etar from "../../Assets/Computacao/etarserra 2023.png";
import friburguense from "../../Assets/Computacao/Friburguense.svg";
import ppgctm from "../../Assets/Computacao/Logo-PPG-CTM.png"
import serra from "../../Assets/serra.png"
import pagil from "../../Assets/CompPage/pagil.svg"

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
            { name: "Kauan Peçanha", link: "https://www.linkedin.com/in/kauan-pe%C3%A7anha-171539241?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAADwOvKUB0kijdehLTeb6K8AV35Kj3tMyxd4&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BKiz1ZqlaTZGmreG79FX9rA%3D%3D" },
            { name: "Carolina Dornelas", link: "https://www.linkedin.com/in/carolina-dornelas-35845b237/" },
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
            { name: "Carolina Dornelas", link: "https://www.linkedin.com/in/carolina-dornelas-35845b237/"},
            { name: "Felipe Carrancho", link: ""},
            { name: "Gabrielle Ferreira", link: "https://www.linkedin.com/in/gabriellefoliv/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company_posts%3BXX5Vx83FR8uzihhztZYg9A%3D%3D"},
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
            { name: "Carolina Dornelas", link: "https://www.linkedin.com/in/carolina-dornelas-35845b237/"},
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
            { name: "Kauan Peçanha", link: "https://www.linkedin.com/in/kauan-pe%C3%A7anha-171539241?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAADwOvKUB0kijdehLTeb6K8AV35Kj3tMyxd4&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BKiz1ZqlaTZGmreG79FX9rA%3D%3D"},
            { name: "Manoel Rodrigues", link: ""},
          ],
    },
    { 
        title: "Projeto Friburguense", 
        img: friburguense, 
        description: "Friburguense Atlético Clube", 
        link:"", 
        info:"O projeto consistiu no desenvolvimento de um Website voltado à aquisição de planos de sócio torcedor do Friburguense Atlético Clube. O site contém as funcionalidades de cadastro e login, com um sistema de pagamentos integrado. Além disso, possui uma aba dedicada aos patrocinadores do clube, com um slider para exibição de seus logotipos.", 
        members: [
            { name: "João Vitor Muniz", link: ""},
            { name: "Leticia Bussinger", link: ""},
            { name: "Ramon Ribeiro", link: ""},
          ],
    },
    { title: "Projeto TMF",
        img: tmf,
        description: "Cervejelas 2023",
        link:"https://usinagemtmf.com.br/",
        info:"O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibição de produtos e serviços oferecidos pela empresa. O site conta com o catálogo de produtos, além da possibilidade de agendamento de orçamento dos serviços oferecidos pela funcionalidade de envio de e-mails. Também há páginas de informações sobre a empresa e um mapa integrado exibindo a localização da mesma.",
        members: [
            
          ],
        },

    { 
        title: "ETArserra 2022",
        img: etar,
        description: "ETArserra",
        link:"https://etarserra.com/x/'",
        info:"Site em WordPress feito para o evento acadêmico Etarserra 2022, que ocorreu de 18 a 21 de outubro em Nova Friburgo. Conta com informações sobre como se inscrever, horários de apresentação, história do evento, entre outras coisas. Foi dado um enfoque bem grande em acessibilidade neste projeto, que conta com várias ferramentas para pessoas com baixa visão, além da tradução em libras de todo o site usando a tecnologia VLibras.",
        members: [
            { name: "Kauan Peçanha", link: ""},
            { name: "Moisés Alves", link: ""},
            { name: "Victor Luis", link: ""},
          ],
        },

    { 
        title: "Prownovar",
        img: prownovar,
        description: "Prownovar",
        link:"https://serrajrengenharia.github.io/prownovar-project/",
        info:"Site informativo desenvolvido para a empresa de engenharia naval, offshore e industrial Prownovar. O site detalha a história da empresa, como atuam, seus principais cases de sucesso e as linhas de atuação da companhia. Além disso, conta com um formulário de contato onde é possível enviar um email direto para a empresa.",
        members: [
            { name: "Guilherme Fialho", link: ""},
            { name: "João Matheus", link: ""},
            { name: "Maike Willian", link: ""},
            { name: "Thiago Paixão", link: ""},
          ],
    },
    { 
      title: "Pagil Serrana",
      img: pagil,
      description: "Pagil Serrana",
      link:"https://pagilserrana.com.br/'",
      info:"Projeto de site informativo em WordPress para divulgar os serviços da empresa de aluguel e venda de peças para equipamentos pesados Pagil Serrana. Conta com informações sobre a história da empresa e detalha os equipamentos e peças que a empresa tem a disposição para venda ou aluguel.",
      members: [
          { name: "Diogo Cardinot", link: ""},
          { name: "Julya Matias", link: ""},
          { name: "Maike William", link: ""},
          { name: "Moises Alves", link: ""},
          { name: "Pedro Longue", link: ""},
          { name: "Thiago Paixão", link: ""},
        ],
  },

];