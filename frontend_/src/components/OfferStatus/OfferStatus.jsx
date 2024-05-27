import OfferStatusView from "./OfferStatusView";

/**
 * @param {object} props
 * @param {string} props.requestStatus active|completed|closed
 * @param {string} props.myOfferStatus active|accepted|declined
 * @param {number|null} props.otherHelperId
 * @param {string|null} props.otherHelperName
 * @param {string|null} props.otherHelperOfferStatus active|accepted|declined
 */
export default function OfferStatus(props) {
    return <OfferStatusView {...props} />;
}
