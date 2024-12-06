import './Footer.sass';
import logo from '../../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookF, 
    faInstagram, 
    faTwitter, 
    faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__main">
                    <img src={logo} alt="Logo" className="footer__logo" />
                    <nav className="footer__nav">
                        <a href="/">Home</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/about">About me</a>
                        <a href="/contact">Contact</a>
                        <a href="/testimonials">Testimonials</a>
                    </nav>
                    <div className="footer__social-links">
                        <a href="#facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#linkedin">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__credit">
                        Made with <span className="footer__heart">❤️</span> by Airdokan
                    </div>
                    <div className="footer__links">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/cookies">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;