import { useRef, useState } from "react";

function Dropdown({ dropdownTitle, content, id }) {
    const [DropIt, setDropIt] = useState(false);
    const scrollTo = useRef();

    const handleClick = () => {
        setDropIt(!DropIt);
        scrollTo.current.scrollIntoView();
    };

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
        <div className="dropdown" id={id} ref={scrollTo}>
            <div className="dropdown_title" onClick={handleClick}>
                <h2>{dropdownTitle}</h2>
                <i
                    className={`fa-solid ${
                        DropIt ? "fa-chevron-up opened" : "fa-chevron-down"
                    }`}
                ></i>
            </div>
            {DropIt ? <Content /> : null}
        </div>
    );
}

export default Dropdown;
