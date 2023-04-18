import { FaGitAlt, FaReact } from "react-icons/fa"
import { SiCss3, SiGithub, SiHtml5, SiJavascript, SiJest } from "react-icons/si"
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias quia laboriosam</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><SiCss3 /></i>
                    </div>
                    <h3>CSS3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias quia laboriosam</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><SiGithub /></i>
                    </div>
                    <h3>GitHub</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias quia laboriosam</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><FaGitAlt /></i>
                    </div>
                    <h3>Git</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias quia laboriosam</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><FaReact /></i>
                    </div>
                    <h3>ReactJS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias quia laboriosam</p>
                </div>

                <div className="skill">
                    <div className="logo">
                        <i><SiJest /></i>
                    </div>
                    <h3>Jest</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias quia laboriosam</p>
                </div>
            </div>

        </section>
    )
}

export { Abilities }