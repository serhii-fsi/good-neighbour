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
            {props.isOfferHelpButton ? "[OfferHelpButton]" : ""} <br />
            {props.isWithdrawHelpButton ? "[WithdrawHelpButton]" : ""} <br />
        </>
    );
}
