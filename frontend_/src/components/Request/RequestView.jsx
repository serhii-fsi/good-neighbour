import { Link } from "react-router-dom";

import getRoute from "../../utils/getRoute";

import config from "../../config.json";

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

    return (
        <>
            <p>title: {props.title}</p>
            <p>authorId (for user profile link): {props.authorId}</p>
            <p>name: {props.name}</p>
            <p>postCode: {props.postCode}</p>
            <p>reqDate: {props.reqDate}</p>
            <p>description: {props.description}</p>
            <p>helpType: {props.helpType}</p>
        </>
    );
}
