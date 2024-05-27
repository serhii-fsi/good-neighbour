import RequestCardView from "./RequestCardView";

/**
 * @param {object} props
 * @param {array} props.children
 */
export default function RequestCard(props) {
    return <RequestCardView>{props.children}</RequestCardView>;
}
