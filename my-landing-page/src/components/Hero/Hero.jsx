import './Hero.sass';
import heroImage from '../../assets/hero-image.png';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__content">
                
                <p className="hero__content__greeting">
                    Hey, I am John
                </p>
                <p className="hero__content__title">
                    I create <span className="hero__content__title__highlight">product design</span> and brand experience
                </p>
                <p className="hero__content__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
                
                <Button className="hero__content__contact-btn" variant="contained" color="primary" size="lg">
                    Get In Touch
                </Button>
            </div>
            <div className="hero-image">
                <img src={heroImage} width={917} height={729} alt="hero" />
            </div>
        </div>
    )
}

export default Hero;