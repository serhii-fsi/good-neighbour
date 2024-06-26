import SmartButton from "../SmartButton/SmartButton";

/**
 * @param {object} props
 * @param {boolean} props.isDeclineButton
 * @param {boolean} props.isAcceptButton
 * @param {boolean} props.isAcceptDisabledButton
 * @param {boolean} props.isCancelButton
 * @param {function} props.onDecline
 * @param {function} props.onAccept
 * @param {function} props.onCancel
 */
export default function RequestOfferControlView(props) {
    return (
        <>
            {props.isDeclineButton ? (
                <SmartButton onClick={props.onDecline} type="default">
                    Decline
                </SmartButton>
            ) : null}
            {props.isAcceptButton ? (
                <SmartButton
                    onClick={props.onAccept}
                    isDisabled={props.isAcceptDisabledButton}
                    type="primary"
                >
                    Accept
                </SmartButton>
            ) : null}
            {props.isCancelButton ? (
                <SmartButton onClick={props.onCancel} type="default">
                    Cancel
                </SmartButton>
            ) : null}
        </>
    );
}
