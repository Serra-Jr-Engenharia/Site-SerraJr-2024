import friburguenseImage from '../Assets/CompPage/friburguense.svg'
import tmfImage from '../Assets/CompPage/projeto-tmf.svg'
import milJoiasImage from '../Assets/CompPage/miljoias.svg'
import cervejelasImage from '../Assets/CompPage/cervejelas.svg'
import odsQuizImage from '../Assets/CompPage/odsquiz.svg'
import etarserraImage from '../Assets/CompPage/etarserra.svg'
import prownovarImage from '../Assets/CompPage/prownovar.svg'
import pagilImage from '../Assets/CompPage/pagil.svg'

export const compData = {

    // Adiciona novos projetos no carrosel da página de computação
    computingProjects: [
        {
            title: "CervejElas 2023",
            image: [cervejelasImage],
            imageSize: '30vh',
            content: `Site desenvolvido para o evento CervejElas 2023, que foi um encontro de mulheres produtoras de cerveja e ocorreu entre 21 e 22 de janeiro em Teresópolis. O site foi pensado prezando pela simplicidade e clareza ao mostrar as informações, por meio de uma landing page com design moderno e limpo. Contou com um cronômetro em contagem regressiva até o dia do evento, mapas indicando o local de realização, informações sobre atrações, ferramentas de acessibilidade (VLibras), entre outras coisas. `,
            summary: 'Site desenvolvido para o evento CervejElas 2023, que foi um encontro de mulheres produtoras de cerveja e ocorreu entre 21 e 22 de janeiro em Teresópolis. O site foi pensado prezando pela simplicidade e clareza ao mostrar as informações, por meio de uma landing page com design moderno e limpo. Contou com um cronômetro em contagem regressiva até o dia do evento, mapas indicando o local de realização, informações sobre atrações, ferramentas de acessibilidade (VLibras), entre outras coisas. ',
            acess: 'https://cervejelas.com.br/',
            members: ['André Barros', 'Caio Bindella', 'Victor Luis', 'Kauan Peçanha', 'Carol Dornelas', 'Davidson', 'Gustavo Curty', 'Vinicius Monnerat'], 
        },
        {
            title: "ODS Quiz",
            image: [odsQuizImage],
            imageSize: '30vh',
            content: `Site desenvolvido pela equipe Serra HackClub durante o Hackaton Hack2030, ocorrido em novembro de 2022 no Rio de Janeiro e organizado pela UERJ. O objetivo do hackaton foi gerar soluções que facilitassem a gestão e acompanhamento dos Objetivos de Desenvolvimento Sustentável da ONU no Rio de Janeiro. O site apresenta todo um sistema de cadastro de usuários, iniciativas e um quiz onde qualquer pessoa pode responder e ter um feedback do quanto o seu entorno está alinhado com os ODS. `,
            summary: 'Site desenvolvido pela equipe Serra HackClub durante o Hackaton Hack2030, ocorrido em novembro de 2022 no Rio de Janeiro e organizado pela UERJ. O objetivo do hackaton foi gerar soluções que facilitassem a gestão e acompanhamento dos Objetivos de Desenvolvimento Sustentável da ONU no Rio de Janeiro. O site apresenta todo um sistema de cadastro de usuários, iniciativas e um quiz onde qualquer pessoa pode responder e ter um feedback do quanto o seu entorno está alinhado com os ODS.',
            acess: 'https://odsquiz.netlify.app/',
            members: ['Victor Luis', 'Caio Bindella', 'Kauan Peçanha', 'Manoel Rodrigues'], 
        },
        {
            title:"Projeto Friburguense",
            image: [friburguenseImage],
            imageSize: '30vh',
            content:`O projeto consistiu no desenvolvimento de um Website voltado à aquisição de planos 
            de sócio torcedor do Friburguense Atlético Clube. O site contém as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Além disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibição de seus logotipos.`,
            summary: 'O projeto consistiu no desenvolvimento de um website para comercialização do sistema de Sócio-Torcedor do clube. O site possui um sistema de integração com uma rede de pagamento que permite que seja comercializado diretamente pelo site com diversas formas de pagamento e total segurança nas transações, também possui um banco de dados para cadastro dos novos sócios que terão acesso a um painel onde é gerada uma carteirinha de sócio-torcedor, há todas as informações do plano, opção de upgrade e muito mais. Todo o site seguiu às riscas as diretrizes da LGPD.',
            members: ['Ramon Ribeiro', 'Leticia Bussinger', 'João Vitor Muniz'],            
        },
        {
            title: "Projeto TMF",
            image: [tmfImage],
            imageSize: '30vh',
            content: `O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibição 
            de produtos e serviços oferecidos pela empresa. O site conta com o catálogo de produtos, além da 
            possibilidade de agendamento de orçamento dos serviços oferecidos pela funcionalidade de 
            envio de e-mails. Também há páginas de informações sobre a empresa e um mapa integrado exibindo a 
            localização da mesma.`,
            summary: 'O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibição de produtos e serviços oferecidos pela empresa. O site conta com o catálogo de produtos, além da possibilidade de agendamento de orçamento dos serviços oferecidos pela funcionalidade de envio de e-mails. Também há páginas de informações sobre a empresa e um mapa integrado exibindo a localização da mesma.',
            acess: 'https://usinagemtmf.com.br/'
        },
        {
            title: "Etarserra 2022",
            image: [etarserraImage],
            imageSize: '30vh',
            content: `Site em WordPress feito para o evento acadêmico Etarserra 2022, que ocorreu de 18 a 21 de outubro em Nova Friburgo. Conta com informações sobre como se inscrever, horários de apresentação, história do evento, entre outras coisas. Foi dado um enfoque bem grande em acessibilidade neste projeto, que conta com várias ferramentas para pessoas com baixa visão, além da tradução em libras de todo o site usando a tecnologia VLibras. `,
            summary: 'Site em WordPress feito para o evento acadêmico Etarserra 2022, que ocorreu de 18 a 21 de outubro em Nova Friburgo. Conta com informações sobre como se inscrever, horários de apresentação, história do evento, entre outras coisas. Foi dado um enfoque bem grande em acessibilidade neste projeto, que conta com várias ferramentas para pessoas com baixa visão, além da tradução em libras de todo o site usando a tecnologia VLibras. ',
            acess: 'https://etarserra.com/x/',
            members: ['Victor Luis', 'Moisés Alves', 'Kauan Peçanha'], 
        },
        {
            title: "Prownovar",
            image: [prownovarImage],
            imageSize: '30vh',
            content: `Site informativo desenvolvido para a empresa de engenharia naval, offshore e industrial Prownovar. O site detalha a história da empresa, como atuam, seus principais cases de sucesso e as linhas de atuação da companhia. Além disso, conta com um formulário de contato onde é possível enviar um email direto para a empresa.`,
            summary: 'Site informativo desenvolvido para a empresa de engenharia naval, offshore e industrial Prownovar. O site detalha a história da empresa, como atuam, seus principais cases de sucesso e as linhas de atuação da companhia. Além disso, conta com um formulário de contato onde é possível enviar um email direto para a empresa.',
            acess: 'https://serrajrengenharia.github.io/prownovar-project/',
            members: ['Guilherme Fialho', 'Maike Willian', 'João Matheus', 'Thiago Paixão'], 
        },
        {
            title: "Pagil Serrana",
            image: [pagilImage],
            imageSize: '30vh',
            content: `Projeto de site informativo em WordPress para divulgar os serviços da empresa de aluguel e venda de peças para equipamentos pesados Pagil Serrana. Conta com informações sobre a história da empresa e detalha os equipamentos e peças que a empresa tem a disposição para venda ou aluguel.`,
            summary: 'Projeto de site informativo em WordPress para divulgar os serviços da empresa de aluguel e venda de peças para equipamentos pesados Pagil Serrana. Conta com informações sobre a história da empresa e detalha os equipamentos e peças que a empresa tem a disposição para venda ou aluguel.',
            acess: 'https://pagilserrana.com.br/',
            members: ['Maike William', 'Thiago Paixão', 'Julya Matias', 'Diogo Cardinot', 'Pedro Longue', 'Moises Alves'], 
        },
    ],
}