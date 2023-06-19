import { ProjectsStyled } from "./style";
import img from '../../assets/Group 4.svg'
import MotorsShop from '../../assets/imgs/Motors-Shop.png'
import BurgueKenzie from '../../assets/imgs/Burgue-Kenzie.png'

export const Projects = () => {

    return (
        <ProjectsStyled id="projects">
            <div className="container">
                <h2>Meus Projetos</h2>
                <img src={img} className="vetor" />

                <ul className="listProjects">
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
                    <li className="project">
                        <section className="info">
                            <h3>Kenzie Kars</h3>
                            <span>Contém:</span>
                            <ul className="listLinguagens">
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Front - End</li>
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
                </ul>
            </div>
        </ProjectsStyled>
    )
}