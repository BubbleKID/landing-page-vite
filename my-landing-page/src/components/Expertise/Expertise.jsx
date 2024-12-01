import ProjectItem from './ProjectItem';
import './Expertise.sass';
import expertises from '../../config/expertises';

const Expertise = () => {
    return (
        <div className="expertise">
            <p className="expertise__title">
                My Skills
            </p>
            <p className="expertise__content">My Expertise</p>
            <div className="expertise__projects">
                {
                    expertises.map((expertise, index) => (
                        <ProjectItem key={index} title={expertise.title} description={expertise.description} />
                    ))
                }
            </div>
        </div>
    )
}

export default Expertise
