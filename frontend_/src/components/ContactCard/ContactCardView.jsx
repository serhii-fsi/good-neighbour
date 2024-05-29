import { Link } from "react-router-dom";

import { Card } from "antd";

import config from "../../config.json";
import getRoute from "../../utils/getRoute";

/**
 * @param {object} props
 * @param {number} props.userId
 * @param {string} props.fullName
 * @param {string} props.address
 * @param {string} props.postcode
 * @param {string} props.phoneNumber
 * @param {string} props.additionalContacts
 * @param {array|undefined} props.children
 */
export default function ContactCardView(props) {
    const { routes } = config;

    return (
        <Card
            title={props.fullName}
            extra={<Link to={getRoute(routes.userProfilePage, props.userId)}>Profile</Link>}
        >
            <p>{props.address}</p>
            <p>{props.postcode}</p>
            <p>{props.phoneNumber}</p>
            <p>{props.additionalContacts}</p>
            {props.children ? <p>{props.children}</p> : null}
        </Card>
    );
}
