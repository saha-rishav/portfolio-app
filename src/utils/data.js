import ReactIcon from '../assets/React.png'
import HTMLIcon from '../assets/HTML.png'
import CSSIcon from '../assets/CSS.png'
import JSIcon from '../assets/JavaScript.png'
import BootStrapIcon from '../assets/bootstrap.png'
import TailwindIcon from '../assets/tailwind.png'
import ReduxIcon from '../assets/Redux.png'
import ViteIcon from '../assets/vite.png'
import VSCodeIcon from '../assets/vscode.png'
import GithubIcon from '../assets/github.png'
import GitIcon from '../assets/git.png'
import SublimeIcon from '../assets/sublime.png'
import SCSSIcon from '../assets/scss.png'
import SkypeIcon from '../assets/skype.png'

import Sunsecurity from '../assets/project_image/sunsecuritypng.png'
import AssamBengal from '../assets/project_image/assambengal.png'
import InfraSmartz from '../assets/project_image/infrasmartz.png'
import IGO from '../assets/project_image/igo.png'
import WeatherApp from '../assets/project_image/weatherApp.png'
import Portfolio from '../assets/project_image/portfolio.png'
import Trinity from '../assets/project_image/trinity.png'

export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: 'HTML',
                image: HTMLIcon
            },
            {
                name: 'CSS',
                image: CSSIcon
            },
            {
                name: 'JavaScript',
                image: JSIcon
            },
            {
                name: 'Bootstrap',
                image: BootStrapIcon
            },
            {
                name: 'Tailwind CSS',
                image: TailwindIcon
            },
            {
                name: 'SCSS',
                image: SCSSIcon
            },
            {
                name: 'React JS',
                image: ReactIcon
            },
            {
                name: 'Redux',
                image: ReduxIcon
            },
            {
                name: 'Vite JS',
                image: ViteIcon
            },
        ]
    },
    {
        title: "Tools",
        skills: [
            {
                name: "Github",
                image: GithubIcon
            },
            {
                name: "Git",
                image: GitIcon
            },
            {
                name: "VS Code",
                image: VSCodeIcon
            },
            {
                name: "Sublime",
                image: SublimeIcon
            },
            {
                name: "Skype",
                image: SkypeIcon
            },
        ]
    }
]

export const experience = [
    {
        title: "UI Developer at RateperSQFT(KDM Proptech Pvt. Ltd.)",
        date: "April 2023 - Present",
        responsibilities: [
            "Developed and executed front-end development strategies, resulting in a 15% increase in website performance by implementing optimization techniques such as code minification and troubleshooting issues using browser developer tools.",
            "Assisted in the development and maintenance of front-end web applications, resulting in a positive impact on the company's overall performance.",
            "Collaborated with UI/UX designers to translate wireframes into responsive and interactive web application",
            "Implemented plugins to extend application functionality.",
        ],
    },
    {
        title: "UI Developer at Ekodus Technologies Pvt. Ltd.",
        date: "Oct 2021 - April  2023",
        responsibilities: [
            "Developed and executed front-end development strategies, resulting in a 15% increase in website performance.",
            "Worked closely with the design team to create pixel-perfect, cross-browser-compatible web pages.",
            "Participated in daily stand-up meetings & collaborated with senior developers to resolve  issues and implement new features.",
            "Gained hands-on experience with version control systems, specifically Git, in a collaborative development environment."
        ],
    }
]

export const projects = [
    {
        image: WeatherApp,
        title: "Weather App",
        desc: "ipsum",
        liveView: "https://trinity.ratepersqft.com/",
    },
    {
        image: Portfolio,
        title: "Portfolio 2",
        desc: "Personal portfolio website using React JS",
        liveView: "",
    },
    {
        image: Trinity,
        title: "Trinity Business Park",
        desc: "ipsum",
        liveView: "https://trinity.ratepersqft.com/",
    },
    {
        image: Sunsecurity,
        title: "Security Security Sevices",
        desc: "Website for a security service agency in Guwahati",
        liveView: "https://sunsecurityservices.org/",
    },
    {
        image: AssamBengal,
        title: "Assam bengal Catering",
        desc: "Website for a Catering Service Provider in Guwahati",
        liveView: "",
    },
    {
        image: InfraSmartz,
        title: "Infrasmartz",
        desc: "Website for a Company based in USA that basically provides IT Support.",
        liveView: "",
    },
    {
        image: IGO,
        title: "IGO",
        desc: "Website for a Two-Wheeler Bike Service like Rapido",
        liveView: "",
    },    
]