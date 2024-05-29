import { Link } from "react-router-dom";

import { Card, Space, Descriptions } from "antd";

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
 * @param {array|undefined} props.children
 */
export default function ContactCardView(props) {
    const { routes } = config;

    return (
        <>
            <Space direction="vertical" className="ContactCardView__container">
                <Card
                    style={{ width: "90vw" }}
                    title={
                        <Link to={getRoute(routes.userProfilePage, props.userId)}>
                            {props.fullName}
                        </Link>
                    }
                >
                    <Descriptions>
                        <Descriptions.Item label="Address">{props.address}</Descriptions.Item>
                        <Descriptions.Item label="Postcode">{props.postcode}</Descriptions.Item>
                        <Descriptions.Item label="Phone">{props.phoneNumber}</Descriptions.Item>
                        <Descriptions.Item label="Additional">
                            {props.additionalContacts}
                        </Descriptions.Item>
                    </Descriptions>
                    {props.children ? <p>{props.children}</p> : null}
                </Card>
            </Space>
        </>
    );
}
