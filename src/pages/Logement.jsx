import Carroussel from "../components/Carroussel";
import Tags from "../components/Tags";
import Stars from "../components/Stars";
import Dropdown from "../components/Dropdown";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function Logement() {
    const [appart, setAppart] = useState(null);
    const id = useParams().id;
    const navigate = useNavigate();

    useEffect(() => {
        const getHouse = async () => {
            const response = await fetch("../logements.json");
            const data = await response.json();

            const found = data.find((appart) => appart.id === id);

            setAppart(found);
        };

        getHouse();
    }, [id]);

    if (!appart) return navigate("/Error404");

    document.title = appart.title;

    return (
        <>
            <Carroussel pictures={appart.pictures} />
            <div className="infos">
                <div className="titre_tags">
                    <div className="titre_logement">
                        <h1>{appart.title}</h1>
                        <p>{appart.location}</p>
                    </div>
                    <Tags appart={appart} />
                </div>
                <div className="prop_stars">
                    <div className="proprietaire">
                        <p style={{ width: "30px" }}>{appart.host.name}</p>
                        <img
                            src={appart.host.picture}
                            alt="Photo de profil du propriétaire"
                        ></img>
                    </div>
                    <Stars rating={appart.rating} />
                </div>
            </div>
            <div className="dropdowns">
                <Dropdown
                    dropdownTitle="Description"
                    content={appart.description}
                    id="description"
                />
                <Dropdown
                    dropdownTitle="Équipements"
                    content={appart.equipments}
                    id="equipments"
                />
            </div>
        </>
    );
}

export default Logement;
