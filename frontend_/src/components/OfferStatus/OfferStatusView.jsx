/**
 * @param {object} props
 * @param {string|null} props.greenText
 * @param {string|null} props.grayText
 * @param {string|null} props.linkText
 * @param {string|null} props.linkPath
 */
export default function OfferStatusView(props) {
    return (
        <>
            greenText: {props.greenText} <br />
            grayText: {props.grayText} <br />
            linkText: {props.linkText} <br />
            linkPath: {props.linkPath} <br />
        </>
    );
}
