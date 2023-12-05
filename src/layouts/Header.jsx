import Navigation from "./Navigation";
import Logo from "../assets/sources_images/LOGO.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <NavLink to="/">
                <img src={Logo}></img>
            </NavLink>
            <Navigation />
        </header>
    );
};

export default Header;
