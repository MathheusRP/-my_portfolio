import { ProjectsStyled } from "./style";
import img from '../../assets/Group 4.svg'
import MotorsShop from '../../assets/imgs/Motors-Shop.png'
import socialNetwork from "../../assets/imgs/social-network.png"

export const Projects = () => {

    return (
        <ProjectsStyled id="projects">
            <div className="container">
                <h2>Meus Projetos</h2>
                <img src={img} className="vetor" />

                <ul className="listProjects">
                    <li className="project">
                        <section className="info">
                            <h3>Social Network</h3>
                            <span>Contém:</span>
                            <ul className="listLinguagens">
                                <li>Typescript</li>
                                <li>React.js</li>
                                <li>CSS</li>
                                <li>Front - End</li>
                            </ul>
                            <p>
                                Esse projeto continua em desenvolvimento, tenho o intuito de criar uma mini rede social.
                            </p>
                            <div className="links">
                                <a href="https://github.com/MathheusRP/my_social_network" target="_blank">Github Code</a>
                                <a href="https://my-social-network-alpha.vercel.app/" target="_blank">Aplicação</a>
                                <a href="https://www.figma.com/file/KRy8pfHLlmIRBUJY5bTwAk/Untitled?type=design&node-id=0-1&mode=design&t=TLfHhvr5kYyFVhCJ-0" target="_blank">Figma</a>
                            </div>
                        </section>
                        <img src={socialNetwork} alt="Kenzie Kars" />
                    </li>
                    <li className="project">
                        <section className="info">
                            <h3>Mortors Shop</h3>
                            <span>Contém:</span>
                            <ul className="listLinguagens">
                                <li>Typescript</li>
                                <li>React.js</li>
                                <li>CSS</li>
                                <li>Node.js</li>
                                <li>PostgreSQL</li>
                                <li>Back - End</li>
                                <li>Front - End</li>
                            </ul>
                            <p>
                                Trabalho realizado em equipe na Kenzie Academy
                                com o objetivo de criar uma plataforma
                                de anuncio de carros
                            </p>
                            <div className="links">
                                <a href="https://github.com/Kenzie-Cars" target="_blank">Github Code</a>
                                <a href="https://kenzie-kars-frontend.vercel.app/" target="_blank">Aplicação</a>
                            </div>
                        </section>
                        <img src={MotorsShop} alt="Kenzie Kars" />
                    </li>
                </ul>
            </div>
        </ProjectsStyled>
    )
}
