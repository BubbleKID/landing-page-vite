import NavMenuItems from "./NavMenuItems";
import NavBarLogo from "./NavBarLogo.jsx";
import ContactBtn from "./ContactBtn";
import "./NavBar.sass";

export default function NavBar() {
    return (
        <nav className="navbar">
            <NavBarLogo />
            <NavMenuItems />
            <ContactBtn />
        </nav>
    );
}