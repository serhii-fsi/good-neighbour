import { Card } from "antd";

import "./RequestCardView.css";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.name
 * @param {string} props.postCode
 * @param {string} props.reqDate
 * @param {string} props.description
 * @param {string} props.helpType
 * @param {array} props.children
 */
export default function RequestCardView(props) {
    return (
        <Card className="RequestCardView__Card">
            <p>{props.title}</p>
            <p>{props.name}</p>
            <p>{props.postCode}</p>
            <p>{props.reqDate}</p>
            <p>{props.description}</p>
            <p>{props.helpType}</p>
            <div>{props.children}</div>
        </Card>
    );
}
