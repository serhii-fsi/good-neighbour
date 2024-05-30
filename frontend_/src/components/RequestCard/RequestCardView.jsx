import { Link } from "react-router-dom";

import dayjs from "dayjs";

import { Card, Flex, Tag } from "antd";

import config from "../../config.json";
import getRoute from "../../utils/getRoute";

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
        <Card>
            <article className="F-line-m S-pm-reset">
                <Link to={getRoute(routes.requestPage, props.requestId)}>
                    <h4 className="F-base F-sm F-medium F-black S-mt-0 S-mb-s S-pt-0 S-pb-0">
                        {props.title.length > 50
                            ? props.title.substring(0, 50) + "..."
                            : props.title}
                    </h4>
                    <Flex className="S-mb-xs" gap="middle">
                        <p className="F-base F-s F-regular F-gray S-mt-0 S-mb-0">{props.name}</p>
                        <p className="F-base F-s F-regular F-gray S-mt-0 S-mb-0">
                            {props.postCode}
                        </p>
                    </Flex>
                    <p className="F-base F-s F-regular F-gray S-mt-0 S-mb-xs">
                        On {dayjs(props.reqDate).format("DD.MM.YYYY")}
                    </p>
                    <p className="F-base F-s F-regular F-black S-mt-0 S-mb-s">
                        {props.description.length > 155
                            ? props.description.substring(0, 155) + "..."
                            : props.description}
                    </p>
                </Link>
                <Flex className={props.children ? "S-mb-s" : ""} gap="middle" justify="flex-start">
                    <Tag className="F-base F-xs F-regular F-black" style={{ padding: "5px 10px" }}>
                        {props.helpType}
                    </Tag>
                </Flex>
                {props.children ? props.children : null}
            </article>
        </Card>
    );

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
