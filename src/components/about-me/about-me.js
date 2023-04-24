import { fotoPerfil } from '../../assets'
import './about-me.css'


const AboutMe = () => {
    return (
        <section className="about-me section" id="about-me">
            <div className="container">
                <div className="row">

                    <div className="section-title">
                        <h2>Sobre Mim</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="about-me-img">
                        <div className="img-box inner-shadow">
                            <img src={fotoPerfil} alt="foto do perfil" className="outer-shadow" />
                        </div>
                    </div>

                    <div className="about-me-info">
                        <p>
                            <strong>
                                Olá! Me chamo Ryan Paiva e sou um Desenvolvedor Frontend em Formação!
                            </strong>
                            Gosto muito da área de tecnologia, e tenho certeza que posso contribuir em qualquer time com as minhas habilidades.
                        </p>

                        <p>
                            Estou sempre me desafiando com novos projetos e participando de comunidades de programação para buscar feedback de outros e desenvolvedores e desenvolvedoras. Além de tentar ajudar essas pessoas com o que já aprendi. 😊
                        </p>

                        <p>
                            Além do desenvolvimento web, também sou um grande apreciador de jogos, filmes, séries, músicas e outras formas de arte.  💜
                        </p>

                        <div className="buttons">
                            <a href={process.env.PUBLIC_URL + '/archives/RyanTúlioPaiva_DevFrontEnd.pdf'} target="_blank" rel="noopener noreferrer" className="button outer-shadow">
                                Veja meu CV
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export { AboutMe }