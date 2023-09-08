import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

function A_propos() {
    document.title = "À propos";
    const contenuTemp =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel consequat tortor. In hac habitasse platea dictumst. Vestibulum vitae mauris eget sem sollicitudin rhoncus non at odio.";

    return (
        <>
            <Banner />
            <div className="a_propos">
                <Dropdown dropdownTitle="Fiabilité" content={contenuTemp} />
                <Dropdown dropdownTitle="Respect" content={contenuTemp} />
                <Dropdown dropdownTitle="Service" content={contenuTemp} />
                <Dropdown dropdownTitle="Sécurité" content={contenuTemp} />
            </div>
        </>
    );
}

export default A_propos;
