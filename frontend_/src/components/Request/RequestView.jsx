import { Link } from "react-router-dom";

import dayjs from "dayjs";

import config from "../../config.json";
import getRoute from "../../utils/getRoute";

import { Flex, Tag } from "antd";

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
        <article className="F-line-m S-mt-l S-mb-m">
            <h1 className="F-base F-m F-medium F-black S-mt-0 S-mb-m S-pt-0 S-pb-0">
                {props.title}
            </h1>
            <Flex className="S-mb-s" gap="middle">
                <Link
                    className="F-base F-s F-regular F-gray F-underline"
                    to={getRoute(routes.userProfilePage, props.authorId)}
                >
                    {props.name}
                </Link>
                <p className="F-base F-s F-regular F-gray S-mt-0 S-mb-0">{props.postCode}</p>
            </Flex>
            <p className="F-base F-s F-regular F-gray S-mt-0 S-mb-s">On {formattedDate}</p>
            <p className="F-base F-s F-regular F-black S-mt-0 S-mb-m">{props.description}</p>
            <Flex gap="middle" justify="flex-start">
                <Tag className="F-base F-xs F-regular F-black" style={{ padding: "5px 10px" }}>
                    {props.helpType}
                </Tag>
            </Flex>
        </article>
    );
}
