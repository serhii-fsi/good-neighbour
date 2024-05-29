import RequestControlView from "./RequestControlView";

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
 * @param {function} props.onClose
 * @param {function} props.onEdit
 * @param {function} props.onCompleted
 */
export default function RequestControl(props) {
    const { acceptedOffer } = props.requestOffers.reduce(
        (result, offer) => {
            if (offer.status === "accepted") result.acceptedOffer = offer;
            return result;
        },
        { acceptedOffer: null }
    );

    const output = { isCloseButton: null, isEditButton: null, isCompletedButton: null };

    if (props.requestStatus === "closed") {
        // no buttons
    } else if (props.requestStatus === "completed") {
        // no buttons
    } else if (props.requestStatus === "active") {
        output.isCloseButton = true;
        output.isEditButton = true;
        if (acceptedOffer) {
            output.isCompletedButton = true;
        }
    }

    return (
        <RequestControlView
            {...output}
            onClose={props.onClose}
            onEdit={props.onEdit}
            onCompleted={props.onCompleted}
        />
    );
}
