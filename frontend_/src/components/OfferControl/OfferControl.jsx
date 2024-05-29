import OfferControlView from "./OfferControlView";

/**
 * @param {object} props
 * @param {number} props.authUserId
 * @param {string} props.requestStatus active|completed|closed
 * @param {[
 *           {
 *             status: string,
 *             helper: { id: number, first_name: string, last_name: string }
 *           }
 *        ]} props.requestOffers status: active|accepted|declined
 * @param {function} props.onOfferHelp
 * @param {function} props.onWithdrawHelp
 */
export default function OfferControl(props) {
    const { acceptedOffer, myOffer } = props.requestOffers.reduce(
        (result, offer) => {
            if (offer.status === "accepted") result.acceptedOffer = offer;
            if (offer.helper.id === props.authUserId) result.myOffer = offer;
            return result;
        },
        { acceptedOffer: null, myOffer: null }
    );

    const output = { isOfferHelpButton: null, isWithdrawHelpButton: null };

    if (props.requestStatus === "closed") {
        // no buttons
    } else if (props.requestStatus === "completed") {
        // no buttons
    } else if (props.requestStatus === "active") {
        if (myOffer && myOffer.status !== "declined") {
            output.isWithdrawHelpButton = true;
        } else if (myOffer && myOffer.status === "declined") {
            output.isOfferHelpButton = true;
        } else if (!myOffer && acceptedOffer) {
            // no buttons
        } else if (!myOffer && !acceptedOffer) {
            output.isOfferHelpButton = true;
        }
    }

    return (
        <OfferControlView
            {...output}
            onOfferHelp={props.onOfferHelp}
            onWithdrawHelp={props.onWithdrawHelp}
        />
    );
}
