import { Card } from "antd";

import "./RequestCardView.css";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string|undefined} props.name
 * @param {string|undefined} props.postCode
 * @param {string} props.reqDate
 * @param {string} props.description
 * @param {string} props.helpType
 * @param {array|undefined} props.children
 */
export default function RequestCardView(props) {
    return (
        <Card className="RequestCardView__Card">
            <p>{props.title}</p>
            {props.name ? <p>{props.name}</p> : null}
            {props.postCode ? <p>{props.postCode}</p> : null}
            <p>{props.reqDate}</p>
            <p>{props.description}</p>
            <p>{props.helpType}</p>
            {props.children ? <p>{props.children}</p> : null}
        </Card>
    );
}
