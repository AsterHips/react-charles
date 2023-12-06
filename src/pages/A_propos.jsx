import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

function A_propos() {
    document.title = "À propos";
    const Fiabilité =
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
    const Respect =
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const Service =
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const Sécurité =
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    return (
        <>
            <Banner />
            <div className="a_propos">
                <Dropdown dropdownTitle="Fiabilité" content={Fiabilité} />
                <Dropdown dropdownTitle="Respect" content={Respect} />
                <Dropdown dropdownTitle="Service" content={Service} />
                <Dropdown dropdownTitle="Sécurité" content={Sécurité} />
            </div>
        </>
    );
}

export default A_propos;
