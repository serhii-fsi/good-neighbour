import SmartButton from "../SmartButton/SmartButton";

/**
 * @param {object} props
 * @param {boolean} props.isOfferHelpButton
 * @param {boolean} props.isWithdrawHelpButton
 * @param {function} props.onOfferHelp
 * @param {function} props.onWithdrawHelp
 */
export default function OfferControlView(props) {
    return (
        <>
            {props.isOfferHelpButton ? (
                <SmartButton onClick={props.onOfferHelp} type="primary">
                    Offer Help
                </SmartButton>
            ) : null}
            {props.isWithdrawHelpButton ? (
                <SmartButton onClick={props.onWithdrawHelp} type="default">
                    Withdraw Help
                </SmartButton>
            ) : null}
        </>
    );
}
