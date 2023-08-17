import Header from "../components/Header";
import Footer from "../components/Footer";

function Error404() {
    return (
        <>
            <Header />
            <main>
                <div className="error">
                    <span>404</span>
                    <p>Oups ! La page que vous demandez n'existe pas.</p>
                    <a href="/">Retourner sur la page d'accueil</a>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Error404;
