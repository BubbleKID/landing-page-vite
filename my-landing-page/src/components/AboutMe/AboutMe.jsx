import './AboutMe.sass';

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-me__image">
                <img src="./src/assets/about_me.png" alt="about-me" />
            </div>
            <div className="about-me__content">
                <p className="about-me__content__subtitle">About</p>
                <p className="about-me__content__title">About Me</p>
                <p className="about-me__content__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                <br />
                <br />
                Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                </p>
            </div>
        </div>
    )
}

export default AboutMe