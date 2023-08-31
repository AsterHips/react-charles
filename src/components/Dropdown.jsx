import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Dropdown({ dropdownTitle, content }) {
    const [DropIt, setDropIt] = useState(false);

    const DropItAlready = () => setDropIt(true);

    const HideItPlease = () => setDropIt(false);

    // function Chevron() {
    //     {DropIt == false ? <i className="fa-solid fa-chevron-down" onClick={DropItAlready}></i> : <i className="fa-solid fa-chevron-up" onClick={HideItPlease}></i>}
    //   };

    // function ChevronDown() {
    //   return (
    //   <i className="fa-solid fa-chevron-down" onClick={DropItAlready}></i>)
    // }

    function Chevron() {
        if (DropIt === false) {
            return (
                <i
                    className="fa-solid fa-chevron-up"
                    onClick={DropItAlready}
                ></i>
            );
        } else {
            return (
                <i
                    className="fa-solid fa-chevron-down"
                    onClick={HideItPlease}
                ></i>
            );
        }
    }

    const Content = () => (
        <div className="dropdown_content">
            <div>
                {typeof content == "string" ? (
                    <p>{content}</p>
                ) : (
                    <ul>
                        {content.map((equipement) => (
                            <li>{equipement}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );

    return (
        <div className="dropdown">
            <div className="dropdown_title">
                <h2>{dropdownTitle}</h2>
                <Chevron />
            </div>
            {DropIt ? <Content /> : null}
        </div>
    );
}

export default Dropdown;
