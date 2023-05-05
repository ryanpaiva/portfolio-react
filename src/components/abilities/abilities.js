import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa"
import { SiCss3, SiExpress, SiGithub, SiHtml5, SiJavascript, SiJest, SiPostgresql } from "react-icons/si"
import './abilities.css'
import '../globals.css'

const Abilities = () => {
    return (
        <section className="abilities section" id="abilities">
            <div className="container">
                <div className="section-title">
                    <h2>Habilidades</h2>
                </div>
            </div>

            <div className="container-abilities row">
                <div className="skill">
                    <div className="logo">
                        <i><SiJavascript /></i>
                    </div>
                    <h3>JavaScript</h3>
                    <p>Tenho uma boa base do JS. já entendo conceitos como callbacks, promisses, async/await, consumo de APIs, spread operators, dentre outros.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><SiHtml5 /></i>
                    </div>
                    <h3>HTML5</h3>
                    <p>Tenho experiência em HTML e compreendo conceitos como tags, atributos, elementos de formulário, estrutura básica de um documento HTML, semântica e responsividade.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><SiCss3 /></i>
                    </div>
                    <h3>CSS3</h3>
                    <p>Com minha experiência em CSS, tenho conhecimento em seletores, propriedades, box model, layout, posicionamento, responsividade, animações e transições.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><SiGithub /></i>
                    </div>
                    <h3>GitHub</h3>
                    <p>Com minha experiência em GitHub, possuo conhecimento em controle de versão, utilização de branches, pull requests, issues, além de ter entendimento sobre a importância da colaboração e do trabalho em equipe.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><FaGitAlt /></i>
                    </div>
                    <h3>Git</h3>
                    <p>Com minha experiência em Git, possuo conhecimento em controle de versão, criação de repositórios locais, utilização de branches, commits, merge e rebase. </p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><FaReact /></i>
                    </div>
                    <h3>ReactJS</h3>
                    <p>Em ReactJS, possuo conhecimento em componentes, estados, propriedades, ciclo de vida, utilização de hooks, gerenciamento de rotas, consumo de APIs, além de ter entendimento sobre a importância da modularidade e da escalabilidade em projetos front-end.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><SiJest /></i>
                    </div>
                    <h3>Jest</h3>
                    <p>Em Jest, possuo conhecimento em testes unitários. Entendo a importância de testes automatizados para garantir a qualidade do código e estou sempre buscando aprender mais e aprimorar minhas habilidades para criar testes mais eficientes e abrangentes.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><SiPostgresql /></i>
                    </div>
                    <h3>PostgreSQL</h3>
                    <p>Tenho conhecimentos em PostgreSQL, um sistema de gerenciamento de banco de dados relacional. Compreendo a importância de estruturar dados de forma eficiente para a construção de aplicativos robustos e escaláveis.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><FaNodeJs /></i>
                    </div>
                    <h3>NodeJS</h3>
                    <p>Tenho conhecimentos em NodeJS, um ambiente de tempo de execução JavaScript que permite a construção de aplicativos de servidor escaláveis e eficientes. Entendo como utilizar o JavaScript para manipular o sistema de arquivos, executar operações assíncronas, criar servidores HTTP, trabalhar com sockets, e outras tarefas comuns em aplicativos de servidor.</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><SiExpress /></i>
                    </div>
                    <h3>ExpressJS</h3>
                    <p>Tenho conhecimentos em ExpressJS, um framework de NodeJS para a construção de aplicativos de servidor. Compreendo como utilizar o ExpressJS para criar rotas, manipular requisições HTTP, gerenciar sessões de usuário, implementar autenticação e autorização, entre outras tarefas comuns em aplicativos de servidor. Também entendo a importância de modularizar o código para facilitar a manutenção e escalabilidade do projeto.</p>
                </div>
            </div>

        </section>
    )
}

export { Abilities }