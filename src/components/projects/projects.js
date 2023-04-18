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
                        <a href="#">
                            <img src="http://placekitten.com/515/700" alt="nome do projeto" />
                            <h3>Projeto 1</h3>
                            <div class="informations-project">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iste? Totam soluta reiciendis dolor</p>
                                <p>🔗 Ver projeto</p>
                            </div>
                        </a>
                    </div>

                    <div class="project">
                        <a href="#">
                            <img src="http://placekitten.com/515/700" alt="nome do projeto" />
                            <h3>Projeto 2</h3>
                            <div class="informations-project">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iste? Totam soluta reiciendis dolor</p>
                                <p>🔗 Ver projeto</p>
                            </div>
                        </a>
                    </div>

                    <div class="project">
                        <a href="#">
                            <img src="http://placekitten.com/515/700" alt="nome do projeto" />
                            <h3>Projeto 3</h3>
                            <div class="informations-project">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iste? Totam soluta reiciendis dolor</p>
                                <p>🔗 Ver projeto</p>
                            </div>
                        </a>
                    </div>

                    <div class="project">
                        <a href="#">
                            <img src="http://placekitten.com/515/700" alt="nome do projeto" />
                            <h3>Projeto 4</h3>
                            <div class="informations-project">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iste? Totam soluta reiciendis dolor</p>
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