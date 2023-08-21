import Card from "./Card";

function Gallery({ apparts }) {
    return (
        <div className="gallery">
            {apparts.map((appart) => (
                <Card appart={appart} key={appart.id} />
            ))}
        </div>
    );
}

export default Gallery;
