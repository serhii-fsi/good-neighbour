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
            greenText: {props.greenText} <br />
            greenBoldText: {props.greenBoldText} <br />
            grayText: {props.grayText} <br />
            grayBoldText: {props.grayBoldText} <br />
            linkText: {props.linkText} <br />
            linkPath: {props.linkPath} <br />
        </>
    );
}
