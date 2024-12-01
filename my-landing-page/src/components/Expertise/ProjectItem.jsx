import './ProjectItem.sass';

const ProjectItem = ({icon, title, description}) => {
    return (
        <div className="project-item">
            <h3 className="project-item__title">{title}</h3>
        </div>
    )
}

export default ProjectItem
