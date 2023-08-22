import Logement_img from "../assets/sources_images/Logement.png";
import arrow_left from "../assets/sources_images/arrow_left.png";
import arrow_right from "../assets/sources_images/arrow_right.png";
import { useEffect, useState } from "react";

let index = 0;

function Carroussel({appart}) {

    const pictures = appart.pictures;

    console.log(pictures)

    function DisplayPicture({picture}) {
        return <img src={picture}></img>;
    }

    function PicturesList(pictures) {
      console.log(pictures)

        const displayPicture = pictures.map((picture) => 
            <DisplayPicture key={index} picture={picture} />
        );
    }

    return (
        <div id="gallery-logement">
            <img
                src={arrow_left}
                alt="fleche gauche"
                className="arrow arrow_left"
            />
            <PicturesList pictures={[...pictures]} />
            <img
                src={arrow_right}
                alt="fleche droite"
                className="arrow arrow_right"
            />
            <span className="pages">
                {/* {index}/{Number(pictures.length-1)} */}
            </span>
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
