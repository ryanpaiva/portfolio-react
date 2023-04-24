import { climaProject, gitApiProject, pokedexProject, youProject } from '../../assets'
import './projects.css'

const Projects = () => {
    return (
        <section class="projects section" id="projects">
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Meus Projetos</h2>
                    </div>
                </div>

                <div class="container-projects container">
                    <div class="project">
                        <a href="https://ryanpaiva.github.io/projeto-you/" target='_blank' rel="noopener noreferrer">
                            <img src={youProject} alt="projeto you" />
                            <h3>You Carrossel</h3>
                            <div class="informations-project">
                                <p>Projeto de carrossel de imagens sobre a série da Netflix You. Neste projeto foram utilizadas Técnologias como HTML, CSS e JavaScript.</p>
                                <p>🔗 Ver projeto</p>
                            </div>
                        </a>
                    </div>

                    <div class="project">
                        <a href="https://ryanpaiva.github.io/projeto-clima/" target='_blank' rel="noopener noreferrer">
                            <img src={climaProject} alt="projeto busca clima" />
                            <h3>Buscar Clima</h3>
                            <div class="informations-project">
                                <p>Neste projeto fui desafiado a utilizar uma API para consultar o clima de qualquer lugar do mundo.</p>
                                <p>🔗 Ver projeto</p>
                            </div>
                        </a>
                    </div>

                    <div class="project">
                        <a href="https://ryanpaiva.github.io/github-api-search/" target='_blank' rel="noopener noreferrer">
                            <img src={gitApiProject} alt="Projeto GitHub API" />
                            <h3>GitHub Search</h3>
                            <div class="informations-project">
                                <p>Com estudos no curso DevQuest, fiz um desafio de criar uma página e utilizar a API do GitHub para buscar informações de qualquer usuário.</p>
                                <p>🔗 Ver projeto</p>
                            </div>
                        </a>
                    </div>

                    <div class="project">
                        <a href="https://pokedex-api-project-seven.vercel.app" target='_blank' rel="noopener noreferrer">
                            <img src={pokedexProject} alt="nome do projeto" />
                            <h3>Pokedex</h3>
                            <div class="informations-project">
                                <p>No projeto Pokedex tive o imenso desafio de criar uma aplicação em React e consumir uma API para mostar na tela essas criaturinhas que todo mundo ama.</p>
                                <p>🔗 Ver projeto</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Projects }