import { Icons } from "../social-icons/icons"
import './home.css'
import '../globals.css'
import '../reset.css'
import '../variables.css'
import { fotoPerfil } from "../../assets"

const Home = () => {
    return (
                <section class="home">
                    <div class="container">
                        <div class="row full-screen align-items-center">

                            <div class="text-home">
                                <p>Olá 💜,</p>
                                <h1>Sou o Ryan Paiva</h1>
                                <h2>Desenvolvedor Frontend</h2>

                                <Icons />
                            </div>

                            <div class="img-home">
                                <div class="img-box inner-shadow">
                                    <img src={fotoPerfil} alt="foto do perfil" class="outer-shadow" />
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
    )
}

export { Home }