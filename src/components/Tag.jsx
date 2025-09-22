import "./Tag.css"

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        ONLINE: { backgroundColor: "#e7a27a", color: "#2c2c2c", borderColor: "#e7a27a" },
        OFFLINE: { backgroundColor: "#7fd3c6", color: "#0f2a24", borderColor: "#7fd3c6" },
        MEETING: { backgroundColor: "#f0e5a8", color: "#2d2b1f", borderColor: "#f0e5a8" },
        HAMAL: { backgroundColor: "#a8dbef", color: "#18323a", borderColor: "#a8dbef" },
        default: {}
    }
    return (
        <button type="button"
            className={`tag ${selected ? 'tag-selected' : ''}`}
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    )
}

export default Tag;