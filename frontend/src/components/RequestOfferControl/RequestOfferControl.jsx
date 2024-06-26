import RequestOfferControlView from "./RequestOfferControlView";

/**
 * @param {object} props
 * @param {string} props.offerStatus active|accepted|declined
 * @param {[
 *           {
 *             status: string,
 *             helper: { id: number, first_name: string, last_name: string }
 *           }
 *        ]} props.requestOffers status: active|accepted|declined
 * @param {function} props.onDecline
 * @param {function} props.onAccept
 * @param {function} props.onCancel
 */
export default function RequestOfferControl(props) {
    const { acceptedOffer } = props.requestOffers.reduce(
        (result, offer) => {
            if (offer.status === "accepted") result.acceptedOffer = offer;
            return result;
        },
        { acceptedOffer: null }
    );

    const output = {
        isDeclineButton: null,
        isAcceptButton: null,
        isAcceptDisabledButton: false,
        isCancelButton: null,
    };

    if (props.offerStatus === "declined") {
        // no buttons
    } else if (props.offerStatus === "active") {
        output.isDeclineButton = true;
        output.isAcceptButton = true;
        if (acceptedOffer) output.isAcceptDisabledButton = true;
    } else if (props.offerStatus === "accepted") {
        output.isDeclineButton = true;
        output.isCancelButton = true;
    }

    return (
        <RequestOfferControlView
            {...output}
            onDecline={props.onDecline}
            onAccept={props.onAccept}
            onCancel={props.onCancel}
        />
    );
}
