import { Link } from "react-router-dom";

import { Card, Flex, Space, Descriptions } from "antd";

import config from "../../config.json";
import getRoute from "../../utils/getRoute";

import "./ContactCardView.css";

/**
 * @param {object} props
 * @param {number} props.userId
 * @param {string} props.fullName
 * @param {string} props.address
 * @param {string} props.postcode
 * @param {string} props.phoneNumber
 * @param {string} props.additionalContacts
 * @param {string} props.className
 * @param {array|undefined} props.children
 */
export default function ContactCardView(props) {
    const { routes } = config;

    return (
        <Card
            title={
                <Link
                    className="F-base F-s F-medium F-black F-underline"
                    to={getRoute(routes.userProfilePage, props.userId)}
                >
                    {props.fullName}
                </Link>
            }
            className={props.className}
        >
            <Flex className="S-mb-s F-line-m" gap="4px" vertical="vertical">
                <p className="S-pm-reset">
                    <span className="F-base F-s F-regular F-gray S-pr-xs">Address:</span>
                    <span className="F-base F-s F-regular F-black">{props.address}</span>
                </p>
                <p className="S-pm-reset">
                    <span className="F-base F-s F-regular F-gray S-pr-xs">Postcode:</span>
                    <span className="F-base F-s F-regular F-black">{props.postcode}</span>
                </p>
                <p className="S-pm-reset">
                    <span className="F-base F-s F-regular F-gray S-pr-xs">Phone:</span>
                    <span className="F-base F-s F-regular F-black">{props.phoneNumber}</span>
                </p>
                <p className="S-pm-reset">
                    <span className="F-base F-s F-regular F-gray S-pr-xs">Additional:</span>
                    <span className="F-base F-s F-regular F-black">{props.additionalContacts}</span>
                </p>
            </Flex>

            {props.children ? props.children : null}
        </Card>
    );
}
