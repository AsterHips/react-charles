import Banner_img from "../assets/sources_images/IMG.png";
import Banner_about from "../assets/sources_images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import { useLocation } from "react-router";

function Banner() {
    const currentPage = useLocation().pathname;

    return (
        <div className="banner">
            {currentPage === "/" && <img src={Banner_img} alt="Bannière"></img>}
            {currentPage === "/A_propos" && (
                <img src={Banner_about} alt="Bannière"></img>
            )}
            <>
                {currentPage === "/" ? 
                window.innerWidth < 767 ? <p>Chez vous,<br /> partout et ailleurs</p> : <p>"Chez vous, partout et ailleurs"</p>
                : null}
            </>
        </div>
    );
}

export default Banner;
