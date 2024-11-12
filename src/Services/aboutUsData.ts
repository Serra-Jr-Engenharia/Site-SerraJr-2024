import membersImage1 from '../Assets/AboutUs/membros-1.webp'
import membersImage2 from '../Assets/AboutUs/membros-2.webp'

import missionIcon from '../Assets/AboutUs/missao-icon.svg'
import visionIcon from '../Assets/AboutUs/visao-icon.svg'
import valueIcon from '../Assets/AboutUs/valores-icon.svg'

export const aboutUsData = {
    // Adiciona novos dados no carrosel da página aboutUs
    members: [
        membersImage1,
        membersImage2,
    ],

    membersText: "A Serra Jr. Engenharia, é uma Empresa Júnior vinculada ao Instituto Politécnico da Universidade do Estado do Rio de Janeiro, localizada em Nova Friburgo. Tem como escopo a prestação de serviços como prototipagem, automação, desenho técnico industrial, projeto e manutenção de equipamentos e o desenvolvimento de websites e sistemas web. Tem como membros alunos dos cursos de Engenharia Mecânica e de Computação atuando em regime de voluntariado, determinados a adquirir experiência colocando seus conhecimentos em prática, com o objetivo de trazer inovação e excelência ao mercado. Além disso, conta com o suporte e orientação dos professores doutores e técnicos da instituição. O faturamento é integralmente destinado à manutenção financeira da empresa e para o desenvolvimento técnico e intelectual de seus membros, com cursos, treinamentos ou outras oportunidades que contribuam para a capacitação profissional, além das vivências experienciadas na Universidade.",

    // Adiciona os ícones da pagina aboutUs
    icons: [
        {
            image: missionIcon,
            imageAlt: "Missão",
            titleText: "Missão",
            hasList: false,
            list: undefined,
            content: 'Promover o desenvolvimento e evolução dos acadêmicos para que sejam capazes de impactar e agregar valores às pessoas e empresas de Nova Friburgo e região, através de projetos mecânicos e de computação.'
        },
        {
            image: visionIcon,
            imageAlt: "Visão",
            titleText: "Visão",
            hasList: false,
            list: undefined,
            content: 'Idealizar nossa empresa como exemplo em inovação e qualidade de serviços.',
        },
        {
            image: valueIcon,
            imageAlt: "Valores",
            titleText: "Valores",
            hasList: true,
            list: ['Dedicação por excelência;', 'Gestão segura;', 'Impactar nossa era;', 'Evolução constante;', 'Responsabilidade com os clientes.'],
            content: undefined,
        },
    ],
}