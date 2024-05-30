import { Link } from "react-router-dom";
import { Card } from "antd";
import dayjs from "dayjs";
import getRoute from "../../utils/getRoute";
import config from "../../config.json";
import "./RequestCardView.css";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {number} props.authorId
 * @param {string|undefined} props.name
 * @param {string|undefined} props.postCode
 * @param {string} props.reqDate
 * @param {string} props.description
 * @param {string} props.helpType
 * @param {array|undefined} props.children
 */
export default function RequestCardView(props) {
    const { routes } = config;
    const formattedDate = dayjs(props.reqDate).format("DD.MM.YYYY");
    console.log(props.children, "props.children.props");
    // console.log(props.children.props.requestOffers, "props.children.props.requestOffers");

    return (
        <Card className="RequestCardView__Card">
            <Link className={"linkContainer"} to={getRoute(routes.RequestPage, props.authorId)}>
                <p className="cardTitle">{props.title}</p>
                <div className="inlineDetails">
                    {props.name ? <p className="faint_colour name_postcode">{props.name}</p> : null}
                    {props.postCode ? (
                        <p className="faint_colour name_postcode">{props.postCode}</p>
                    ) : null}
                    <p className="faint_colour reqDate">{formattedDate}</p>
                </div>
                <p className="description">{props.description}</p>
            </Link>
            <p className="type_container">{props.helpType}</p>
            {props.children ? <p>{props.children}</p> : null}
        </Card>
    );
}
