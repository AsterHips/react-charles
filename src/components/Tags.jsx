import Tag from "./Tag";

function Tags({ appart }) {

    console.log(appart.tags)
    const tags = [appart.tags]
    console.log(tags)

    return (
        <div className="tags">
            {tags.map((tag) => (
                <Tag tag={tag} />
            ))}
        </div>
    );
}

export default Tags;


// arr.map(inner => inner.map(obj => <p key={obj.id}>{obj.user}</p>));