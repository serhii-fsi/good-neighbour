import { Link } from "react-router-dom";

import { Flex } from "antd";

import "./StatusView.css";

/**
 * @param {object} props
 * @param {string|null} props.greenText
 * @param {string|null} props.greenBoldText
 * @param {string|null} props.grayText
 * @param {string|null} props.grayBoldText
 * @param {string|null} props.linkText
 * @param {string|null} props.linkPath
 */
export default function StatusView(props) {
    return (
        <>
            {props.greenText ? (
                <span className="F-base F-xs F-regular F-green">{props.greenText}</span>
            ) : null}
            {props.greenBoldText ? (
                <span className="F-base F-xs F-bold F-green">{props.greenBoldText}</span>
            ) : null}
            {props.grayText ? (
                <span className="F-base F-xs F-regular F-gray">{props.grayText}</span>
            ) : null}
            {props.grayBoldText ? (
                <span className="F-base F-xs F-bold F-gray">{props.grayBoldText}</span>
            ) : null}{" "}
            {props.linkText && props.linkPath ? (
                <Link to={props.linkPath} className="F-base F-xs F-regular F-gray F-underline">
                    {props.linkText}
                </Link>
            ) : null}
        </>
    );
}
