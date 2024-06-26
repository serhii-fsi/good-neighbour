import getRoute from "../../utils/getRoute";

import StatusView from "./StatusView";

import config from "../../config.json";

/**
 * @param {object} props
 * @param {boolean} props.isHelper User currently plays a helper role
 * @param {boolean} props.isRequester User currently plays a requester role
 * @param {number} props.authUserId
 * @param {string} props.requestStatus active|completed|closed
 * @param {[
 *           {
 *             status: string,
 *             helper: { id: number, first_name: string, last_name: string }
 *           }
 *        ]} props.requestOffers status: active|accepted|declined
 */
export default function Status(props) {
    const { routes } = config;

    const { acceptedOffer, activeOffers, declinedOffers, myOffer, isAgreedWithMe } =
        props.requestOffers.reduce(
            (result, offer) => {
                if (offer.status === "accepted") {
                    result.acceptedOffer = offer;
                    result.isAgreedWithMe = offer.helper.id === props.authUserId;
                } else if (offer.status === "active") result.activeOffers.push(offer);
                else if (offer.status === "declined") result.declinedOffers.push(offer);
                if (offer.helper.id === props.authUserId) result.myOffer = offer;
                return result;
            },
            {
                acceptedOffer: null,
                activeOffers: [],
                declinedOffers: [],
                myOffer: null,
                isAgreedWithMe: null,
            }
        );

    const output = {
        greenText: null,
        greenBoldText: null,
        grayText: null,
        grayBoldText: null,
        linkText: null,
        linkPath: null,
    };

    if (props.isHelper) {
        // Role Helper
        // Display offer status
        if (props.requestStatus === "active" && (!acceptedOffer || isAgreedWithMe)) {
            if (myOffer?.status === "accepted") {
                output.greenBoldText = "Accepted";
            } else if (myOffer?.status === "active") {
                output.grayText = "Reviewing";
            } else if (myOffer?.status === "declined") {
                output.grayText = "Declined";
            }
        }
        // Display request status
        else if (props.requestStatus === "closed") {
            output.grayBoldText = "Closed";
        } else if (props.requestStatus === "completed") {
            output.greenBoldText = "Completed";
        } else if (props.requestStatus === "active" && !isAgreedWithMe) {
            if (acceptedOffer) {
                output.greenBoldText = "Agreed with";
                output.linkText =
                    acceptedOffer.helper.first_name + " " + acceptedOffer.helper.last_name;
                output.linkPath = getRoute(routes.userProfilePage, acceptedOffer.helper.id);
            } else {
            }
        }
    } else if (props.isRequester) {
        // Role - Requester
        // Display request status
        if (props.requestStatus === "closed") {
            output.grayBoldText = "Closed";
        } else if (props.requestStatus === "completed") {
            output.greenBoldText = "Completed";
        } else if (props.requestStatus === "active") {
            if (acceptedOffer) {
                output.greenBoldText = "Agreed with";
                output.linkText =
                    acceptedOffer.helper.first_name + " " + acceptedOffer.helper.last_name;
                output.linkPath = getRoute(routes.userProfilePage, acceptedOffer.helper.id);
            } else {
                output.greenText = `Offers (${activeOffers.length})`;
                output.grayText = "In progress";
            }
        }
    }

    return <StatusView {...output} />;
}
