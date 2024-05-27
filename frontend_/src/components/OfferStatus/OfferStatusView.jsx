/**
 * @param {object} props
 * @param {string} props.requestStatus active|completed|closed
 * @param {string} props.myOfferStatus active|accepted|declined
 * @param {number|null} props.otherHelperId
 * @param {string|null} props.otherHelperName
 * @param {string|null} props.otherHelperOfferStatus active|accepted|declined
 */
export default function OfferStatusView(props) {
    return (
        <>
            requestStatus: {props.requestStatus} <br />
            myOfferStatus: {props.myOfferStatus} <br />
            {props.otherHelperOfferStatus === "accepted" ? (
                <>
                    otherHelperName: {props.otherHelperName} <br />
                    otherHelperId: {props.otherHelperId} <br />
                    otherHelperOfferStatus: {props.otherHelperOfferStatus} <br />
                </>
            ) : (
                ""
            )}
        </>
    );
}
