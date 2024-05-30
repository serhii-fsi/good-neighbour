import { Link } from "react-router-dom";
import { Space, Card, Tag } from "antd";

import dayjs from "dayjs";
import getRoute from "../../utils/getRoute";

import config from "../../config.json";
import "./RequestView.css";

/**
 * @param {object} props
 * @param {number} props.requestId ???
 * @param {string} props.title
 * @param {number} props.authorId
 * @param {string} props.name
 * @param {string} props.postCode
 * @param {string} props.reqDate
 * @param {string} props.description
 * @param {string} props.helpType
 */
export default function RequestView(props) {
    const { routes } = config;
    const formattedDate = dayjs(props.reqDate).format("DD.MM.YYYY");

    return (
        <Card className="RequestView__container">
            <h1>{props.title}</h1>
            <Space style={{ height: "15px" }} className="RequestView__subheader">
                <Link to={getRoute(routes.userProfilePage, props.authorId)}>{props.name}</Link>
                <p style={{ margin: "5px 0" }}>{props.postCode}</p>
            </Space>
            <p style={{ margin: "5px 0" }}>On {formattedDate} All Day</p>
            <p style={{ margin: "10px 0" }}>{props.description}</p>
            <Tag style={{ padding: "2px 10px" }}>{props.helpType}</Tag>
        </Card>
    );
}
