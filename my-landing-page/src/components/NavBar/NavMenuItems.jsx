import NavMenuItemsConfig from "./NavMenuItemsConfig";
import "./NavMenuItems.sass";
export default function NavMenuItems() {
    return (
        <ul className="nav-menu">
            {NavMenuItemsConfig.map((item) => (
                <li className="nav-menu__item" key={item.path}>{item.name}</li>
            ))}
        </ul>
    );
}