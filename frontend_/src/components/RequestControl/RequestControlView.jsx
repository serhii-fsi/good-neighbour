/**
 * @param {object} props
 * @param {boolean} props.isCloseButton
 * @param {boolean} props.isEditButton
 * @param {boolean} props.isCompletedButton
 * @param {function} props.onClose
 * @param {function} props.onEdit
 * @param {function} props.onCompleted
 */
export default function RequestControlView(props) {
    return (
        <>
            RequestControl: <br />
            {props.isCloseButton ? "[CloseButton]" : ""} <br />
            {props.isEditButton ? "[EditButton]" : ""} <br />
            {props.isCompletedButton ? "[CompletedButton]" : ""} <br />
        </>
    );
}
