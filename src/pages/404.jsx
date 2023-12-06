import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

function Error404() {
    document.title = "Erreur404";

    const currentPage = useLocation().pathname;

    return (
        <>
            {currentPage !== "/Error404" ? <Header /> : null}
            <main>
                <div className="error">
                    <span>404</span>
                    <p>Oups ! La page que vous demandez n'existe pas.</p>
                    <NavLink
                        to="/"
                    >
                        Retourner sur la page d'accueil
                    </NavLink>
                </div>
            </main>
            {currentPage !== "/Error404" ? <Footer /> : null}
        </>
    );
}

export default Error404;
