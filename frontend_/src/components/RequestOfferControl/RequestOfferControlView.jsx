/**
 * @param {object} props
 * @param {boolean} props.isDeclineButton
 * @param {boolean} props.isAcceptButton
 * @param {boolean} props.isCancelButton
 * @param {function} props.onDecline
 * @param {function} props.onAccept
 * @param {function} props.onCancel
 */
export default function RequestOfferControlView(props) {
    return (
        <>
            RequestOfferControl: <br />
            {props.isDeclineButton ? "[DeclineButton]" : ""} <br />
            {props.isAcceptButton ? "[AcceptButton]" : ""} <br />
            {props.isCancelButton ? "[CancelButton]" : ""} <br />
        </>
    );
}
