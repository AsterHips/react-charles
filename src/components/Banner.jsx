import Banner_img from "../assets/sources_images/IMG.png";
import Banner_about from "../assets/sources_images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import { useLocation } from "react-router";

function Banner() {
    const currentPage = useLocation().pathname;

    function ImageBanniere() {
        if (currentPage === "/") {
            return <img src={Banner_img} alt="Bannière"></img>;
        }
        if (currentPage === "/A_propos") {
            return <img src={Banner_about} alt="Bannière"></img>;
        }
    }

    return (
        <div className="banner">
            <ImageBanniere />
            <p>
                {currentPage === "/" ? "Chez vous, partout et ailleurs" : null}
            </p>
        </div>
    );
}

export default Banner;
