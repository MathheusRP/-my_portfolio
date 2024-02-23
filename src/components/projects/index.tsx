import { ProjectsStyled } from "./style";
import img from '../../assets/Group 4.svg'
import MotorsShop from '../../assets/imgs/Motors-Shop.png'
import MyShopImage from '../../assets/imgs/myShopImage.png'
import BurgueKenzie from '../../assets/imgs/Burgue-Kenzie.png'
import socialNetwork from "../../assets/imgs/social-network.png"
import Instalink from "../../assets/imgs/Instalink.png"

export const Projects = () => {

    return (
        <ProjectsStyled id="projects">
            <div className="container">
                <h2>Meus Projetos</h2>
                <img src={img} className="vetor" />

                <ul className="listProjects">
                    <li className="project">
                        <section className="info">
                            <h3>Rede Social</h3>
                            <span>Contém:</span>
                            <ul className="listLinguagens">
                                <li>Typescript</li>
                                <li>React.js</li>
                                <li>CSS</li>
                            </ul>
                            <p>
                                Uma simples interface de rede social
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
                    <li className="project">
                        <section className="info">
                            <h3>InstaLink </h3>
                            <span>Contém:</span>
                            <ul className="listLinguagens">
                                <li>Typescript</li>
                                <li>React.js</li>
                                <li>CSS</li>
                            </ul>
                            <p>
                                Rede social com o fogo em publicações de projetos e divagações de links
                            </p>
                            <div className="links">
                                <a href="https://github.com/MathheusRP/InstaLink" target="_blank">Github Code</a>
                                <a href="https://insta-link.vercel.app/" target="_blank">Aplicação</a>
                                <a href="https://www.figma.com/file/ijL1IuMNUF0OjXJW1vtVTj/Untitled?type=design&node-id=0-1&mode=design&t=Tr4lG3HYYpAM5QYL-0" target="_blank">Figma</a>
                            </div>
                        </section>
                        <img src={Instalink} alt="Kenzie Kars" />
                    </li>
                    <li className="project">
                        <section className="info">
                            <h3>Burguer Kenzie</h3>
                            <span>Contém:</span>
                            <ul className="listLinguagens">
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <p>
                                Trabalho realizado na Kenzie Academy com o
                                objetivo de realizar um simples sistema
                                de compra de comida
                            </p>
                            <div className="links">
                                <a href="https://github.com/MathheusRP/Hamburgueria/tree/master" target="_blank">Github Code</a>
                                <a href="https://hamburgueria-eosin.vercel.app/" target="_blank">Aplicação</a>
                            </div>
                        </section>
                        <img src={BurgueKenzie} alt="Kenzie Kars" />
                    </li>
                    <li className="project">
                        <section className="info">
                            <h3>My-Shop</h3>
                            <span>Contém:</span>
                            <ul className="listLinguagens">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Next</li>
                                <li>Typescript</li>
                            </ul>
                            <p>
                                Uma simples interface de loja de computadores e acessórios.
                            </p>
                            <div className="links">
                                <a href="https://github.com/MathheusRP/my_shop" target="_blank">Github Code</a>
                                <a href="https://my-shop-six-sepia.vercel.app/" target="_blank">Aplicação</a>
                            </div>
                        </section>
                        <img src={MyShopImage} alt="Kenzie Kars" />
                    </li>
                </ul>
            </div>
        </ProjectsStyled>
    )
}
