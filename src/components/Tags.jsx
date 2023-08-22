import Tag from "./Tag";

function Tags({ appart }) {

    const tags = appart.tags

    return (
        <div className="tags">
            {tags.map((tag) => (
                <Tag tag={tag} />
            ))}
        </div>
    );
}

export default Tags;
