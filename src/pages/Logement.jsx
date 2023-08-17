import Logement_img from "../assets/sources_images/Logement.png";
import arrow_left from "../assets/sources_images/arrow_left.png";
import arrow_right from "../assets/sources_images/arrow_right.png";
import photo_profil from "../assets/sources_images/Host.png";
import Star from "../components/Star";
import { useParams } from "react-router";
import { useEffect, useState } from "react";


let index = 0;

function Logement() {

  const [appart, setAppart] = useState([])
  const id = useParams().id;

  useEffect(() => {
  const getHouse = async () => {
    const response =  await fetch('./logements.json')
    const data = await response.json()

    const found = data.find((appart) => appart.id === id );
    
    setAppart(found)  
    console.log(data)
  }
  
  console.log(appart)
  console.log(id)

getHouse();
})

    return (
        <>
            <div id="gallery-logement">
                <img
                    src={arrow_left}
                    alt="fleche gauche"
                    className="arrow arrow_left"
                />
                <img src={Logement_img} alt="Photo du logement"></img>
                <img
                    src={arrow_right}
                    alt="fleche droite"
                    className="arrow arrow_right"
                />
                <span className="pages">{index}/{Number(index.length-1)}</span>
            </div>
            <div className="details">
                <div className="infos">
                    <div>
                        <h1>{appart.title}</h1>
                        <p>Paris, Île-de-France</p>
                    </div>
                    <div className="proprietaire">
                        <p>Alexandre Dumas</p>
                        <img
                            src={photo_profil}
                            alt="Photo de profil du propriétaire"
                        ></img>
                    </div>
                </div>
                <div className="tags">
                    <span>Cozy</span>
                    <Star />
                </div>
                <div className="dropdowns"></div>
            </div>
        </>
    );
}

// const bannerImageElement = document.querySelector('.banner-img');
// const bannerParagraphElement = document.querySelector('#banner p');
// const arrowLeftElement = document.querySelector('.arrow_left');
// const arrowRightElement = document.querySelector('.arrow_right');

// arrowRightElement.addEventListener('click', () => {

//   if (index >= logements.length-1) {
//     index = 0
//   } else {
//     index++
//   }
//   bannerImageElement.src = `./assets/images/logementshow/${logements[index].image}`;
//   bannerParagraphElement.innerHTML = logements[index].tagLine;
// });

// arrowLeftElement.addEventListener('click', () => {
//   if (index <= 0) {
//     index = logements.length-1
//   } else {
//     index--
//   }
//   bannerImageElement.src = `./assets/images/logementshow/${logements[index].image}`;
//   bannerParagraphElement.innerHTML = logements[index].tagLine;
// });

export default Logement;
