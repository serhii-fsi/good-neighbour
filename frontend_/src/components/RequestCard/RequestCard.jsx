import RequestCardView from "./RequestCardView";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.name
 * @param {string} props.postCode
 * @param {string} props.reqDate
 * @param {string} props.description
 * @param {string} props.helpType
 * @param {array} props.children
 */
export default function RequestCard(props) {
    return <RequestCardView {...props} />;
}
