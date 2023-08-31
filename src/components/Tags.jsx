function Tags({ appart }) {

    const tags = appart.tags

    function Tag({ tag }) {
        return (
             <span>{tag}</span>
        );
    }

    return (
        <div className="tags">
            {tags.map((tag) => (
                <Tag tag={tag} />
            ))}
        </div>
    );
}

export default Tags;