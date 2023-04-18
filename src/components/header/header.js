import './header.css'
import '../globals.css'
import '../variables.css'
import '../reset.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <a href="#">
                        <h1 className="logo">RP</h1>
                    </a>

                    <nav>
                        <input id="menu-hamburguer" type="checkbox" />
                        <label htmlFor='menu-hamburguer'>
                            <div className="menu">
                                <span className="hamburguer"></span>
                            </div>
                        </label>

                        <ul>
                            <li><a href="#about-me">Sobre Mim</a></li>
                            <li><a href="#abilities">Habilidades</a></li>
                            <li><a href="#projects">Meus Projetos</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export { Header }