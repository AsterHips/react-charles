import Logement_img from '../assets/sources_images/Logement.png';
import arrow_left from '../assets/sources_images/arrow_left.png';
import arrow_right from '../assets/sources_images/arrow_right.png';
import { useEffect, useState } from 'react';

function Carroussel({ appart }) {
  const [index, setIndex] = useState(0);

  return (
    <div id="gallery-logement">
      <img src={arrow_left} alt="fleche gauche" className="arrow arrow_left" />
      <img
        src={appart.pictures[index]}
        alt="gallerie photos"
        className="gallery-logement-current"
      />
      <img
        src={arrow_right}
        alt="fleche droite"
        className="arrow arrow_right"
      />
      <span className="pages">{/* {index}/{Number(pictures.length-1)} */}</span>
    </div>
  );
}

// arrowRightElement.addEventListener('click', () => {

//   if (index >= logements.length-1) {
//     index = 0
//   } else {
//     index++
//   }
//   bannerImageElement.src = `./assets/images/logementshow/${logements[index].image}`;
// });

// arrowLeftElement.addEventListener('click', () => {
//   if (index <= 0) {
//     index = logements.length-1
//   } else {
//     index--
//   }
//   bannerImageElement.src = `./assets/images/logementshow/${logements[index].image}`;
// });

export default Carroussel;
