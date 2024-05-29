import StatusView from "./StatusView";

/**
 * @param {object} props
 * @param {string} props.offerStatus active|completed|closed
 */
export default function Status(props) {
    return <StatusView greenBoldText={props.offerStatus === "accepted" ? "Accepted" : null} />;
}
