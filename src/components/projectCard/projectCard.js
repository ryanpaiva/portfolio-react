import React from 'react';

function ProjectCard({ project }) {
    return (
        <div className="project">
            <a href={project.link} target='_blank' rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <div className="informations-project">
                    <p>{project.description}</p>
                    <p>🔗 Ver projeto</p>
                </div>
            </a>
        </div>
    );
}

export { ProjectCard }
