import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

function A_propos() {
    document.title = "À propos";
    const contenuTemp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel consequat tortor. In hac habitasse platea dictumst. Vestibulum vitae mauris eget sem sollicitudin rhoncus non at odio. Quisque sit amet vehicula elit. Sed aliquet, mi nec porta posuere, ante ligula fermentum leo, ut finibus eros felis nec urna. Vestibulum in ornare sapien, id congue urna. Donec neque dui, efficitur eget est id, tempus dignissim metus. Etiam finibus dolor lorem, eget bibendum neque ullamcorper sit amet. Nunc ornare commodo faucibus."

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
