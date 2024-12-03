import NavMenuItems from "./NavMenuItems";
import NavBarLogo from "./NavBarLogo.jsx";
import Button from "../Button/Button";
import "./NavBar.sass";

export default function NavBar() {
    return (
        <nav className="navbar">
            <NavBarLogo />
            <NavMenuItems />
            <Button className="contact-btn" variant="outlined" color="primary" size="lg">Contact Me</Button>
        </nav>
    );
}