import './ProjectItem.sass';

const ProjectItem = ({icon, title, description}) => {
    console.log(icon, title, description)
    
    return (
        <div className="project-item">
            <div className="project-item__icon">
                <img src={`./src/assets/${icon}`} alt={title} />
            </div>
            <h3 className="project-item__title">{title}</h3>
            <p className='project-item__description'>{description}</p>
        </div>
    )
}

export default ProjectItem
