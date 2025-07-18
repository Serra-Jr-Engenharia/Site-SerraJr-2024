import marmitexImage from '../../Assets/MechanicPage/marmitex.svg'
import vicentePaulaImage from '../../Assets/MechanicPage/vicente.svg'
// import vicentePaulaImage2 from '../../Assets/MechanicPage/vicente-2.svg'
import tmfImage from '../../Assets/MechanicPage/tmf.svg'
// import tmfImage2 from '../../Assets/MechanicPage/tmf-2.svg'
// import tmfImage3 from '../../Assets/MechanicPage/tmf-3.svg'
// import tmfImage4 from '../../Assets/MechanicPage/tmf-4.svg'
// import tmfImage5 from '../../Assets/MechanicPage/tmf-5.svg'
import soledadeImage from '../../Assets/MechanicPage/soledade.svg'
// import soledadeImage2 from '../../Assets/MechanicPage/soledade-2.svg'
// import chassiImage from '../../Assets/MechanicPage/chassi.svg'
import chassiImage2 from '../../Assets/MechanicPage/chassi-2.svg'
import baleLiteralImage from '../../Assets/MechanicPage/baleLiteral.svg'
import Laje from '../../Assets/MechanicPage/LAJE.jpeg'

interface Member {
    name: string;
    link: string;
  }
  
export interface Project {
    title: string;
    img: string;
    description: string;
    info: string;
    members: Member[]; 
    link?: string;
}
  

export const projectsData: Project[] = [
    { 
        title: "Projeto Balé Literal", 
        img: baleLiteralImage, 
        description: "Balé Literal", 
        info:"Projeto desenvolvido para a exposição Balé Literal da artista Laura Lima, que entrou em exposição em maio de 2023 no Museu de Arte Contemporânea de Barcelona (MACBA). A Serra prestou consultoria e atuou na programação dos movimentos de algumas das peças expostas usando componentes eletrônicos como Arduino, servomotores e motor de passo. Além disso, algumas peças e caixas de redução foram impressas pela própria Serra Jr. usando suas impressoras 3D.",
        members: [
            { name: "Vinicius Monnerat", link: "https://linkedin.com" },
            { name: "Fellipe Moraes", link: "https://linkedin.com" },
            { name: "Kauan Peçanha", link: "https://www.linkedin.com/in/kauan-pe%C3%A7anha-171539241?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAADwOvKUB0kijdehLTeb6K8AV35Kj3tMyxd4&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BKiz1ZqlaTZGmreG79FX9rA%3D%3D" },
          ],
    },
    { 
        title: "Projeto Marmitex", 
        img: marmitexImage, 
        description: "Programa de Pós-Graduação em Ciência e Tecnologia de Materiais",  
        info:"O problema apresentado foi a necessidade do aumento do rendimento da máquina e, consequentemente aumento da sua produtividade. Executou-se o desenvolvimento de desenho mecânico 3D e 2D de um maquinário de fabricação de quentinhas já existente (Marmitex ANEC). A entrega do projeto conteve o modelo em 3D da máquina montada e uma ficha técnica com o desenho mecânico.", 
        members: [
          ],
    },
    { 
        title: "Projeto São Vicente de Paula", 
        img: vicentePaulaImage, 
        description: "2a versão", 
        info:"A instituição possuía um problema recorrente no cuidado dos idosos que era a dificuldade na hora do banho. Os equipamentos utilizados não eram adequados à instalação dos banheiros, o que dificultava o manejo dos idosos e havia um problema com acúmulo de água nas macas. A Serra Jr. Engenharia foi ao local, estudou as instalações onde eram realizados os banhos, com a medição em mãos foi desenvolvida uma maca que atendia perfeitamente à necessidade, ela possui apoios que são encaixadas na parede e que auxiliam a levantar e descer os idosos, diminuindo o esforço físico dos enfermeiros, além de possuir um sistema de drenagem de água evitando o acúmulo de água. Além do desenvolvimento da mecânica da maca, também foi feito um estudo de materiais para selecionar o mais adequado para evitar corrosão, baixa resistência e durabilidade, alta oxidação e, assim, garantindo uma vida útil bem longa ao equipamento.", 
        members: [
          ],
    },
    { 
        title: "Projeto TMF", 
        img: tmfImage, 
        description: "Hackathon Hack2030", 
        info:"O projeto para a empresa de usinagem e tornearia, TMF, consistiu no desenvolvimento de um desenho técnico e modelagem 3D de uma máquina para produção de sacolas e bolsas de papel. A empresa possuía a máquina, porém, tinha a necessidade de obter o desenho 2D e 3D para poder comercializar o equipamento. A Serra Jr. Engenharia foi à fábrica, mediu até o menor dos parafusos do maquinário, fez a modelagem no software SolidWorks e entregou todos os desenhos do maquinário, possibilitando a comercialização do mesmo.", 
        members: [
            
          ],
    },
    { 
        title: "Projeto Fazenda Soledade", 
        img: soledadeImage, 
        description: "Friburguense Atlético Clube", 
        info:"O projeto de automação industrial consistiu na implementação de uma válvula solenóide acionada automaticamente com a finalidade de obter um melhor controle de temperatura do refluxo, um processo fundamental na destilação da cachaça. A implementação foi realizada em todos os alambiques. Acompanhando o sistema automatizado também foi desenvolvido um software com uma IHM (Interface Homem-Máquina) que permite ao operador ter acesso à todas as informações do sistema como temperatura, nível de tanque e com uma função de gerar um relatório no formato estipulado pela cachaçaria com todas as informações de produção de determinado intervalo de tempo.", 
        members: [
            
          ],
    },
    { title: "Projeto Chassi de Moto",
        img: chassiImage2,
        description: "Cervejelas 2023",
        info:"O projeto realizado consistiu na execução de um desenho técnico e da modelagem CAD de um chassi de motocicleta seguindo todas as normas da ABNT e DETRAN para que o projeto pudesse passar por um processo de registro de patente e comercialização com finalidade de aplicação real na construção de motocicletas.",
        members: [
           
          ],
        },

    { 
        title: "Projeto Lar Abrigo Amor a Jesus",
        img: Laje,
        description: "Lar Abrigo Amor a Jesus",
        info:"O problema enfrentado foi em relação a utilização das cadeiras de rodas presente no abrigo, o qual foi constatado alto índice de oxidação e/ou rompimentos de suas peças. Após a realização de testes em laboratório, quanto a oxidação e análise estrutral e testes no próprio equipamento foi desenvolvido um manual de uso com a especificação de cada cadeira com o objetivo de aumento da durabilidade.",
        members: [
            
          ],
        },

    // { 
    //     title: "",
    //     img: ,
    //     description: " ",
    //     info:"",
    //     members: [
    //         { name: "", link: ""}
    //       ],
    // },

];