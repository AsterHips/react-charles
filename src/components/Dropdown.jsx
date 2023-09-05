import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Dropdown({ dropdownTitle, content, id }) {
    const [DropIt, setDropIt] = useState(false);
    const ancre = useLocation().hash || null;

    useEffect(() => {
        if (ancre) {
            const element = document.querySelector(ancre);
            setTimeout(() => {
                window.scrollTo({
                    top: element ? element.offsetTop : 0,
                });
            }, 50);
        }
    }, [ancre]);


    // Ici récupérer l'ID du menu ouvert ?

    const DropItAlready = () => setDropIt(true);
    const HideItPlease = () => setDropIt(false);

    function Chevron() {
        if (DropIt === false) {
            return (
                <Link to={`#${id}`}>
                    <i
                        className="fa-solid fa-chevron-up"
                        onClick={DropItAlready}
                    ></i>
                </Link>
            );
        } else {
            return (
                <Link to={`#${id}`}>
                    <i
                        className={
                            DropIt ? "fa-solid fa-chevron-down opened" : null
                        }
                        onClick={HideItPlease}
                    ></i>
                </Link>
            );
        }
    }

    const Content = () => (
        <div className="dropdown_content dropped">
            <div>
                {typeof content == "string" ? (
                    <p>{content}</p>
                ) : (
                    <ul>
                        {content.map((equipement) => (
                            <li key={equipement}>{equipement}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );

    return (
        <div className="dropdown" id={id}>
            <div className="dropdown_title">
                <h2>{dropdownTitle}</h2>
                <Chevron />
            </div>
            {DropIt ? <Content /> : null}
        </div>
    );
}

export default Dropdown;
