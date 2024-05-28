import RequestCardView from "./RequestCardView";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string|undefined} props.name
 * @param {string|undefined} props.postCode
 * @param {string} props.reqDate
 * @param {string} props.description
 * @param {string} props.helpType
 * @param {array|undefined} props.children
 */
export default function RequestCard(props) {
    return <RequestCardView {...props} />;
}
