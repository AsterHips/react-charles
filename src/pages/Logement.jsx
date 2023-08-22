import Carroussel from '../components/Carroussel';
import Tags from '../components/Tags';
import Stars from '../components/Stars';

import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

function Logement() {
  const [appart, setAppart] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const getHouse = async () => {
      const response = await fetch('../logements.json');
      const data = await response.json();

      const found = data.find((appart) => appart.id === id);

      setAppart(found);
    };

    getHouse();
  }, [id]);

  if (!appart) return <div>Loader</div>;

  return (
    <>
      <Carroussel appart={appart} />
      <div className="infos">
        <div className="titre_tags">
          <div className="titre_logement">
            <h1>{appart.title}</h1>
            <p>{appart.location}</p>
          </div>
          {/* <Tags appart={appart} /> */}
        </div>
        <div className="prop_stars">
          {/* <div className="proprietaire">
                        <p>{appart.host.name}</p>
                        <img
                            src={appart.host.picture}
                            alt="Photo de profil du propriétaire"
                        ></img>
                    </div> */}
          <Stars />
        </div>
      </div>
    </>
  );
}

export default Logement;
