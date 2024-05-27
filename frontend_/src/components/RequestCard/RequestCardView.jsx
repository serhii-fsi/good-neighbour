import { Card } from "antd";

import "./RequestCardView.css";

/**
 * @param {object} props
 * @param {array} props.children
 */
export default function RequestCardView(props) {
    return (
        <Card className="RequestCardView__Card">
            <p>Card content</p>
            <p>Card content</p>
            <div>{props.children}</div>
        </Card>
    );
}
