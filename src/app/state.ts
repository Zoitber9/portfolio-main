import {LinksNameType, SkillsNameType} from "../common/svgSelector/SvgSelector";
import bgImg from '../assets/image/intro-bg-2.jpg'
import SocialNetworkImg from '../assets/image/SocialNet.jpg'
import tidoListImg from '../assets/image/TodoImg.jpg';
import LearningCardsImg from '../assets/image/learnCards.jpg';
import recommendMovies from '../assets/image/recommendMovies.jpg';
import Me from '../assets/image/duck-secondary.jpg'
import Pizza from '../assets/image/heroPizza.jpg'

const headerLinks: LinksType[] = [
    {href: 'https://github.com/Zoitber9', svgName: 'GitHub'},
    {href: 'https://www.instagram.com/andrei_abramchik/', svgName: 'Instagram'},
    {
        href: 'https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B0%D0%B1%D1%80%D0%B0%D0%BC%D1%87%D0%B8%D0%BA-1711b1259/',
        svgName: 'Linkedin'
    },
]

const contactsLinks: LinksType[] = [
    {href: 'https://github.com/Zoitber9', svgName: 'GitHub'},
    {href: 'https://www.instagram.com/andrei_abramchik/', svgName: 'Instagram'},
    {
        href: 'https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B0%D0%B1%D1%80%D0%B0%D0%BC%D1%87%D0%B8%D0%BA-1711b1259/',
        svgName: 'Linkedin'
    },
    {href: 'https://www.codewars.com/users/Andrei.Abramchyk', svgName: 'CodeWars'},
]

const arrSkills: string[] = ['React', 'JavaScript', 'Redux', 'TypeScript', 'Formik', 'Axios', 'Material-ui', 'Storybook', 'Postman', 'Unit Testing', 'Git']

const callLife: string = '+375 (29) 720-26-89'

export const state: StateType = {
    en: {
        headerComponent: {
            menuName: 'Menu',
            nav: [
                {href: 'home', navName: 'Home'},
                {href: 'about', navName: 'About'},
                {href: 'skills', navName: 'Skills'},
                {href: 'projects', navName: 'Portfolio'},
                {href: 'contacts', navName: 'Contact'},
            ],
            headerLinks
        },
        mainComponent: {
            h1: `Hi There, I'm a developer`,
            arrSkills,
            location: 'based in Minsk, Belarus.',
            a1: 'View My Works',
            a2: 'Contact Me',
            photo: Me
        },
        aboutMeComponent: {
            span: 'About Me',
            title: 'Know Me More',
            h2: `Hi, I'm `,
            name: 'Andrey Abramchik',
            aboutMe: 'I\'m a skilled frontend React developer with a passion for creating visually appealing and user-friendly web applications. With several years of experience in the field, I am proficient in building dynamic and responsive interfaces using HTML, CSS, and JavaScript. My expertise includes working with ReactJS, Redux, and other modern front-end frameworks, as well as integrating APIs and designing databases',
            contacts: [
                {title: 'Name:', info: 'Andrey Abramchik'},
                // {title: 'Email:', info: 'abramchik.andrey8312@gmail.com'},
                {title: 'Date of birth:', info: '24 July, 1998'},
                {title: 'From:', info: 'Minsk, Belarus.'},
            ]
        },
        skillsComponent: {
            span: 'What I Do?',
            title: 'How I can help your next project',
            skills: [
                {
                    svgName: 'React',
                    description: 'An open source JavaScript library for developing user interfaces. Can be used to develop single page and mobile applications.'
                },
                {
                    svgName: 'Redux',
                    description: 'An open source JavaScript library for managing application state.'
                },
                {
                    svgName: 'JavaScript',
                    description: 'Multi-paradigm programming language. Supports object-oriented, imperative and functional styles. Is one of the core technologies of the World Wide Web'
                },
                {
                    svgName: 'TypeScript',
                    description: 'A programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript.'
                },
                {
                    svgName: 'Formik',
                    description: 'A library that helps you work with forms. It simplifies getting data from a form, validating data, displaying error messages, and more.'
                },
                {
                    svgName: 'Axios',
                    description: 'An open source library that allows you to make HTTP requests.'
                },
                {
                    svgName: 'Material-ui',
                    description: 'A framework that produces ready-made Google solutions for fast and fairly simple web development.'
                },
                {
                    svgName: 'Bootstrap',
                    description: 'A set of tools for creating sites and web applications. Includes HTML and CSS design templates for typography, web forms, buttons, labels, navigation blocks, and more.'
                },
                {
                    svgName: 'HTML',
                    description: 'The standard markup language for documents designed to be displayed in a web browser.'
                },
                {
                    svgName: 'CSS',
                    description: 'A Style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML'
                },
                {
                    svgName: 'SASS',
                    description: 'A CSS-based metalanguage designed to increase the abstraction level of CSS code and simplify cascading style sheet files.'
                },
                // {
                //     svgName: 'LESS',
                //     description: 'Dynamic style language. It was influenced by the Sass style language, and in turn influenced its new "SCSS" syntax.'
                // },
                {
                    svgName: 'Storybook',
                    description: 'A UI library that can be used to document components. It also allows you to organize and assemble components.'
                },
                {
                    svgName: 'Postman',
                    description: 'An API platform that allows developers to design, build, test, and iterate their APIs.'
                },
                // {
                //     svgName: 'Snapshot Testing',
                //     description: 'Tests that take a screenshot of the screen (reference screenshot) and compare it with the actual screenshot that is taken during the test run.'
                // },
                {
                    svgName: 'Unit Testing',
                    description: 'The process of programming, checking the correctness of individual modules of the source code of programs.'
                },
                {
                    svgName: 'Git',
                    description: 'A free and open source distributed version control system designed to process any project quickly and efficiently.'
                },
            ]
        },
        projectsComponent: {
            span: 'Portfolio',
            title: 'Some of my most recent projects',
            projects: [
                {
                    title: 'Movies Recommendation',
                    img: recommendMovies,
                    description: 'An application that always shows up-to-date data about movies, including their popularity...',
                    href: 'https://serene-island-94785.herokuapp.com/'
                },
                {
                    title: 'Todo list',
                    img: tidoListImg,
                    description: 'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list...',
                    href: 'https://kast13l.github.io/todolist/#/todolist'
                },
                {
                    title: 'Learning Cards',
                    img: LearningCardsImg,
                    description: 'Is a card bearing information, which is intended to be used as an aid in memorization. Flashcards are often used to memorize vocabulary, historical dates...',
                    href: 'https://kast13l.github.io/cards-2.0'
                },
                {
                    title: 'Social Network',
                    img: SocialNetworkImg,
                    description: 'An online platform that is used for communication, dating, creating social relationships between people...',
                    href: 'https://kast13l.github.io/samurai-way-main/'
                },
                // {
                //     title: 'Pizza Yolla',
                //     img: Pizza,
                //     description: 'Online pizza ordering application. (Currently under development)',
                //     href: 'https://pizzayolla.store/'
                // },

            ]
        },
        distantWorkComponent: {
            title: 'Interested in working with me?',
            a: 'Hire Me!',
            bgImg
        },
        contactsComponent: {
            title: 'Let\'s get in touch',
            p: 'Please share as much info, as possible so we can get the most out of our first catch-up. I will be glad to work with you if my skills and experience suit you. Willing to talk over the phone or in person.',
            h3: 'Call:',
            callLife,
            contactsLinks,
            name: 'What is Your Name:',
            email: 'Your Email Address:',
            formMessage: 'How can I Help you?:',
            button: 'Send',
            formError: {
                nameError: 'Name is required.',
                emailError: 'Email is required.',
                messageError: 'This field is also required.',
                buttonError: 'Fill in the field correctly.',
                emailIncorrect: 'Email is incorrect.',
                loading: 'Loading...⏳'
            }

        },
        footerComponent: {
            contactsLinks: contactsLinks,
            copyright: '@ 2023 All Rights reserved'
        }
    }
}
//type
type StateType = {
    [key: string]: {
        headerComponent: HeaderComponentType
        mainComponent: MainComponentType
        aboutMeComponent: AboutMeComponent
        skillsComponent: SkillsComponentsType
        projectsComponent: ProjectsComponentsType
        distantWorkComponent: DistantWorkComponentType
        contactsComponent: ContactsComponentType
        footerComponent: FooterComponentType
    }
}

export type HeaderComponentType = {
    menuName: string
    nav: NavType[]
    headerLinks: LinksType[]
}

export type NavType = {
    href: HrefNavType
    navName: string
}
type HrefNavType = 'home' | 'skills' | 'projects' | 'contacts' | 'about'

export type LinksType = {
    href: string
    svgName: LinksNameType
}
export type MainComponentType = {
    h1: string
    arrSkills: string[]
    location: string
    a1: string
    a2: string
    photo: string
}
export type AboutMeComponent = {
    span: string
    title: string
    h2: string
    name: string
    aboutMe: string
    contacts: ContactsType[]
}
type ContactsType = {
    title: string
    info: string
}
export type SkillsComponentsType = {
    span: string
    title: string
    skills: SkillType[]
}
type SkillType = {
    svgName: SkillsNameType
    description: string
}
export type ProjectsComponentsType = {
    span: string
    title: string
    projects: ProjectType[]
}
type ProjectType = {
    title: string
    img: string
    description: string
    href: string
}
export type DistantWorkComponentType = {
    title: string
    a: string
    bgImg: string
}
export type ContactsComponentType = {
    title: string
    p: string
    h3: string
    callLife: string
    contactsLinks: LinksType[]
    name: string
    email: string
    formMessage: string
    button: string
    formError: FormErrorType
}
export type FormErrorType = {
    nameError: string
    emailError: string
    messageError: string
    buttonError: string
    emailIncorrect: string
    loading: string
}
export type FooterComponentType = {
    contactsLinks: LinksType[]
    copyright: string

}