import arrow_right from "../assets/sources_images/arrow_right.png";
import arrow_left from "../assets/sources_images/arrow_left.png";
import { useEffect, useState } from "react";
import React from 'react';

const arrowRightElement = document.getElementsByClassName(arrow_right);
const arrowLeftElement = document.getElementsByClassName(arrow_left);


function Carroussel({ appart }) {
    const [index, setIndex] = useState(0);
    const galleryLength = appart.pictures.length;
          
      function NavigateLeft(){
        console.log(index)
        console.log({index})
        if (index <=0) {
          setIndex(galleryLength-1);
        } else {
          setIndex(index - 1);
        }
      }
      
      console.log(index)
      console.log({index})
      
      function NavigateRight(){
        console.log(index)
        console.log({index})
        if (index >=galleryLength-1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }


    return (
        <div id="gallery-logement">
            <img
                src={arrow_left}
                alt="fleche gauche"
                className="arrow arrow_left"
                onClick={NavigateLeft}
            />
            <img
                src={appart.pictures[index]}
                alt="gallerie photos"
                className="gallery-logement-current"
            />
            <img
                src={arrow_right}
                alt="fleche droite"
                className="arrow arrow_right"
                onClick={NavigateRight}
            />
            <span className="pages">
                {index + 1}/{appart.pictures.length}
            </span>
        </div>
    );
}

export default Carroussel;
