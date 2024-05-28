import getRoute from "../../utils/getRoute";

import OfferStatusView from "./OfferStatusView";

import config from "../../config.json";

/**
 * @param {object} props
 * @param {number} props.currentUserId
 * @param {string} props.requestStatus active|completed|closed
 * @param {[
 *           {
 *             status: string,
 *             helper: { id: number, first_name: string, last_name: string }
 *           }
 *        ]} props.requestOffers status: active|accepted|declined
 */
export default function OfferStatus(props) {
    const { routes } = config;

    const [myOffer, otherOffer] = props.requestOffers.reduce(
        (result, offer) => {
            if (offer.helper.id === props.currentUserId) result[0] = offer;
            else result[1] = offer;
            return result;
        },
        [null, null]
    );

    const output = { greenText: null, grayText: null, linkText: null, linkPath: null };

    if (otherOffer?.status === "accepted") {
        output.greenText = "Agreed with";
        output.linkText = otherOffer.helper.first_name + " " + otherOffer.helper.last_name;
        output.linkPath = getRoute(routes.userProfilePage, otherOffer.helper.id);
    } else if (myOffer.status === "accepted") {
        output.greenText = "Accepted";
    } else if (myOffer.status === "active") {
        output.grayText = "Reviewing";
    }

    return <OfferStatusView {...output} />;
}
