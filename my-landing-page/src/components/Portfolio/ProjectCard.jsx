import './ProjectCard.sass';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div>
                <img src={`/src/assets/${project.img}`} height="400"alt={project.title} />
            </div>
            <div className="project-card__content">
                <h3>{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__link-container">
                    <a 
                        className="project-card__link" 
                        href={project.dribbble} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                         View on Dribbble 
                       
                    </a>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.33341 2H17.6667V15.3333M17.6667 2L1.66675 18L17.6667 2Z" stroke="#006B6A" 
                        strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;