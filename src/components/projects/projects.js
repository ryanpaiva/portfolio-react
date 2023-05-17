import React from 'react';
import './projects.css'
import { ProjectCard } from '../projectCard/projectCard'
import { climaProject, gitApiProject, netflix, pokedexProject, todolistProject, youProject } from '../../assets';

function Projects() {
    const projects = [
        {
            title: "Netflix Clone",
            image: netflix,
            description: "Nesse projeto fiz um clone da página Netflix utilizando React.js",
            link: "https://netflixclone-tan.vercel.app"
        },
        {
            title: "You Carrossel",
            image: youProject,
            description: "Projeto de carrossel de imagens sobre a série da Netflix You. Neste projeto foram utilizadas Técnologias como HTML, CSS e JavaScript.",
            link: "https://ryanpaiva.github.io/projeto-you/"
        },
        {
            title: "Buscar Clima",
            image: climaProject,
            description: "Neste projeto fui desafiado a utilizar uma API para consultar o clima de qualquer lugar do mundo.",
            link: "https://ryanpaiva.github.io/projeto-clima/"
        },
        {
            title: "GitHub Search",
            image: gitApiProject,
            description: "Com estudos no curso DevQuest, fiz um desafio de criar uma página e utilizar a API do GitHub para buscar informações de qualquer usuário.",
            link: "https://ryanpaiva.github.io/github-api-search/"
        },
        {
            title: "Pokedex",
            image: pokedexProject,
            description: "No projeto Pokedex tive o imenso desafio de criar uma aplicação em React e consumir uma API para mostar na tela essas criaturinhas que todo mundo ama.",
            link: "https://pokedex-api-project-seven.vercel.app"
        },
        {
            title: "Todo List",
            image: todolistProject,
            description: "Neste projeto tive o desafio de construir uma todo list utilizando a tencologia React.JS",
            link: "https://react-todo-list-ryanpaiva.vercel.app"
        },
    ];

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Meus Projetos</h2>
                    </div>
                </div>

                <div className="container-projects container">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Projects }
