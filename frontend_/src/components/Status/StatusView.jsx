/**
 * @param {object} props
 * @param {string|null} props.greenText
 * @param {string|null} props.greenBoldText
 * @param {string|null} props.grayText
 * @param {string|null} props.grayBoldText
 * @param {string|null} props.linkText
 * @param {string|null} props.linkPath
 * 
 *            
 */
import { Link } from "react-router-dom";
import "./StatusView.css";


export default function StatusView(props) {
    return (
        <>
            {props.greenText ? <p className="greenText">{props.greenText} </p> : null}
            {props.greenBoldText ? <p className="greenBoldText">{props.greenBoldText} </p> : null}
            {props.grayText ? <p className="grayText"> {props.grayText} </p> : null}
            {props.grayBoldText ? <p className="grayBoldText"> {props.grayBoldText}</p> : null}{" "}
            {props.linkText && props.linkPath ? <Link to = {props.linkPath}>  {props.linkText} </Link> : null}
            {props.linkPath}
        </>
    );
}
