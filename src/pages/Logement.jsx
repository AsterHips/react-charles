import Carroussel from "../components/Carroussel"
import Tags from "../components/Tags"
import { useParams } from "react-router";
import { useEffect, useState } from "react";


let index = 0;

function Logement() {

  const [appart, setAppart] = useState([])
  const id = useParams().id;

  useEffect(() => {
  const getHouse = async () => {
    const response =  await fetch('../logements.json')
    const data = await response.json()

    const found = data.find((appart) => appart.id === id );
    
    setAppart(found)  
  }

getHouse();
}, [id]);

   return (
        <>
        <Carroussel />
            <div className="details">
                <div className="infos">
                    <div>
                        <h1>{appart.title}</h1>
                        <p>{appart.location}</p>
                    </div>
                    <div className="proprietaire">
                        <p>{appart.host.name}</p>
                        <img
                            src={appart.host.picture}
                            alt="Photo de profil du propriétaire"
                        ></img>
                    </div>
                </div>
                <div className="dropdowns"></div>
            <Tags />
            </div>
        </>
    );
}

export default Logement;
