import { Link } from "react-router-dom";

import { Card } from "antd";

import config from "../..//config.json";
import getRoute from "../../utils/getRoute";

import "./RequestCardView.css";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {number} props.requestId
 * @param {string|undefined} props.name
 * @param {string|undefined} props.postCode
 * @param {string} props.reqDate
 * @param {string} props.description
 * @param {string} props.helpType
 * @param {array|undefined} props.children
 */
export default function RequestCardView(props) {
    const { routes } = config;

    return (
        <Card className="RequestCardView__Card">
            <Link to={getRoute(routes.requestPage, props.requestId)}>
                <p>{props.title}</p>
                {props.name ? <p>{props.name}</p> : null}
                {props.postCode ? <p>{props.postCode}</p> : null}
                <p>{props.reqDate}</p>
                <p>{props.description}</p>
            </Link>
            <p>{props.helpType}</p>
            {props.children ? <p>{props.children}</p> : null}
        </Card>
    );
}
