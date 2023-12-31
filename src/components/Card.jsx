import { Link } from "react-router-dom";

function card({ appart }) {
    return (
        <Link to={`/logement/${appart.id}`}>
            <div className="card">
                <img src={appart.cover}></img>
                <p>{appart.title}</p>
            </div>
        </Link>
    );
}

export default card;
