import arrow_right from "../assets/sources_images/arrow_right.png";
import arrow_left from "../assets/sources_images/arrow_left.png";
import { useState } from "react";
import React from "react";

function Carroussel({ pictures }) {
    const [index, setIndex] = useState(0);
    const galleryLength = pictures.length;

    function NavigateLeft() {
        if (index <= 0) {
            setIndex(galleryLength - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function NavigateRight() {
        if (index >= galleryLength - 1) {
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
                className={galleryLength === 1 ? "nope" : "arrow arrow_left"}
                onClick={NavigateLeft}
            />
            <img
                src={pictures[index]}
                alt="gallerie photos"
                className="gallery-logement-current"
            />
            <img
                src={arrow_right}
                alt="fleche droite"
                className={galleryLength === 1 ? "nope" : "arrow arrow_right"}
                onClick={NavigateRight}
            />
            <span 
            className={galleryLength === 1 ? "nope" : "numerotation"}
            >
                {index + 1}/{pictures.length}
            </span>
        </div>
    );
}

export default Carroussel;
