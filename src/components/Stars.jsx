function Stars({ rating }) {
    return (
        <div className="star-container">
            {[1, 2, 3, 4, 5].map((number, index) => (
                <span
                    key={index}
                    className={rating >= number ? "red-star" : "grey-star"}
                >
                    <i className="fa-sharp fa-solid fa-star fa-2x"></i>
                </span>
            ))}
        </div>
    );
}

export default Stars;
