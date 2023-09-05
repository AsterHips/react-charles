import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

function Home() {
    document.title = "Accueil";
    const [apparts, setApparts] = useState([]);

    useEffect(() => {
        const getHouses = async () => {
            const response = await fetch("./logements.json");
            const data = await response.json();
            setApparts(data);
        };

        getHouses();
    });
    return (
        <>
            <Banner />
            <Gallery apparts={apparts} />
        </>
    );
}

export default Home;
