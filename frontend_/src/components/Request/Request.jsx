import RequestView from "./RequestView";

/**
 * @param {object} props
 * @param {number} props.requestId ???
 * @param {string} props.title
 * @param {number} props.authorId
 * @param {string} props.name
 * @param {string} props.postCode
 * @param {string} props.reqDate
 * @param {string} props.description
 * @param {string} props.helpType
 */
export default function RequestCard(props) {
    return <RequestView {...props} />;
}
