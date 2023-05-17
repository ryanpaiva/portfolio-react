import './header.css'
import '../globals.css'
import '../variables.css'
import '../reset.css'
import React, { useState, useEffect } from 'react'

const Header = () => {
    const [scrollBlack, setScrollBlack] = useState(false)

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setScrollBlack(true)
            } else {
                setScrollBlack(false)
            }
        }
        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, []);

    return (
        <header className={scrollBlack ? 'scrollBlack' : ''} scrollBlack={scrollBlack} >
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