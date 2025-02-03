/* ======= Icones Tecnologias =======*/
import { SiJavascript, SiTypescript, SiReact, SiAngular, SiBootstrap, SiStyledcomponents, SiNodedotjs, SiJquery } from 'react-icons/si';

/*======== Import das imagens =======*/
import imagem01 from '/public/game-master.jpg'
import imagem02 from '/public/space-tourism.jpg'
import imagem03 from '/public/poke-api.jpg'
import imagem04 from '/public/hbo-clone.jpg'
import imagem05 from '/public/calculadora-react.jpg'
import imagem06 from '/public/disney+.jpg'


export const links = [
    {
        name: 'Home',
        path: 'home',
    },
    {
        name: 'Serviços',
        path: 'services',
    },
    {
        name: 'Skills',
        path: 'skills',
    },
    {
        name: 'Portfolio',
        path: 'portfolio',
    },
    {
        name: 'Resumo',
        path: 'resume',
    },
    {
        name: 'Contato',
        path: 'contact',
    },
]

export const services = [
    {
        id: 1,
        name: 'Desenvolvimento Web',
        title: 'Front-End',
        description:'Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
    },
    {
        id: 2,
        name: 'Designer',
        title: 'UI Design',
        description:'Desenho interfaces que sejam claras, objetivas e que possam ser intuitivas para o usuário. '
    },
]

export const skills = [
    {
        id: 1,
        name: 'JavaScript',
        image: <SiJavascript id='js' />
    },
    {
        id: 2,
        name: 'TypeScript',
        image: <SiTypescript id='ts' />
    },
    {
        id: 3,
        name: 'React',
        image: <SiReact id='react' />
    },
    {
        id: 4,
        name: 'Angular',
        image: <SiAngular id='angular' />
    },
    {
        id: 5,
        name: 'Bootstrap',
        image: <SiBootstrap id='bootstrap' />
    },
    {
        id: 6,
        name: 'styled-components',
        image: <SiStyledcomponents id='styled' />
    },
    {
        id: 7,
        name: 'jQuery',
        image: <SiJquery id='jquery' />
    },
    {
        id: 8,
        name: 'Node js',
        image: <SiNodedotjs id='node' />
    },
]

export const projects = [
    {
        id: 1,
        img: imagem01,
        category: 'React',
        title: 'Edmárcio Rodriguês',
        description:
            'Este é um website KSW - Martial Arts & Self Defense, construção com react e sass',
        codigo: 'https://github.com/',
        demo: 'https://kswmartialarts.com.br/'

    },
    
]

export const cv = [
    {
        id: 1,
        title: 'Análise de Desenvolvimento de Sistemas',
        subtitle: 'Faculdade FIC',
        date: '2002 - 2005',
        description:
        'Ingressei na faculdade em setembro de 2002, com o objetivo de se especializar ainda mais na área de TI em uma faculdade com foco em desenvolvimento, desde então tive experiêcia com PHP, JavaScript, lógica de programação e algoritimos, analise e requistos de software e banco de dados.',
        category: 'educacao',
    },
    {
        id: 2,
        title: 'Desenvolvedor PHP',
        subtitle: 'UTD',
        date: '2016 - 2018',
        description:
        'Iniciei meus estudos em junho de 2016 neste curso que é focado na linguagem PHP para o back-end e front-end onde apliquei conhecimentos com javascript, react, bootstrap, jquery, sass e material UI na construção de alguns projetos e no momento venho estudando o back-end com o python.',
        category: 'educacao',
    },
    {
        id: 3,
        title: 'Desenvolvedor Front-End',
        subtitle: 'Facto Digital',
        date: '2012 - 2022',
        description:
        'Apesar de ter tido algumas experiências com tecnologia anteriores, iniciei de fato meus estudos e transição de carreira em junho de 2022, onde desde então venho realizando alguns projetos front-end com tecnologias como react.',
        category: 'experiencia',
    },
    {
        id: 4,
        title: 'Desenvolvedor PHP',
        subtitle: 'Itarget Tecnologia',
        date: '2022 - 2025',
        description:
        'Fui promovido a técnico III como responsável da manutenção do setor de lingotamento continuo, e após fui promovido a analista de manutenção e participei de projetos com foco na analise de dados, para identificação de perfis de perda de manutenção e captura de ganhos em disponibilidade e redução de custos.',
        category: 'experiencia',
    },
]

