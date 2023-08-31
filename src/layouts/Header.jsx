import Navigation from "./Navigation";
import Logo from "../assets/sources_images/LOGO.png";

const Header = () => {
    return (
        <header>
            <img src={Logo}></img>
            <Navigation />
        </header>
    );
};

export default Header;
