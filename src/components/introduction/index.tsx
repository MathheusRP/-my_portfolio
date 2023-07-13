import { IntroductionStyle } from "./style";
import MyPicture from '../../assets/imgs/Minha-Foto.png'
import { AiFillGithub } from 'react-icons/ai'
import {
    DiCss3,
    DiJavascript,
    DiHtml5,
    DiReact,
    DiPython,
    DiNodejsSmall,
    DiPostgresql
} from 'react-icons/di'

export const Introduction = () => {

    return (
        <IntroductionStyle id="home">
            <header>
                <h1>Matheus Rocha</h1>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contacts">Contacts</a>
                </nav>
            </header>
            <section className="container">
                <div className="presentation">
                    <div className="photo">
                        <img src={MyPicture} alt="Minha foto" />
                        <h2>Eu sou um <b>Desenvolvedor web</b></h2>
                    </div>
                    <div className="text">
                        <h3>Eu <b>gosto muito</b> de criar e desenvolver <b>projetos</b></h3>
                        <p>Conheça aqui neste ambiente criado especialmente para você alguns projetos dos quais participei</p>
                    </div>
                    <div className="buttons">
                        <a href="#projects" className="button">Ver projetos</a>
                        <a href="https://github.com/MathheusRP" target="_blank"><AiFillGithub className='gitHub' /></a>
                    </div>
                </div>
                <ul>
                    <li>
                        <DiCss3 className='icon' />
                        <span>Css3</span>
                    </li>
                    <li>
                        <DiJavascript className='icon' />
                        <span>Javascript</span>
                    </li>
                    <li>
                        <DiHtml5 className='icon' />
                        <span>Html5</span>
                    </li>
                    <li>
                        <DiReact className='icon' />
                        <span>React</span>
                    </li>
                    <li>
                        <DiPython className='icon' />
                        <span>Python</span>
                    </li>
                    <li>
                        <DiNodejsSmall className='icon' />
                        <span>Nodejs</span>
                    </li>
                    <li>
                        <DiPostgresql className='icon' />
                        <span>Postgresql</span>
                    </li>
                </ul>
            </section>


        </IntroductionStyle>
    )
}