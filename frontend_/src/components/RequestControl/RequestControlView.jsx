import SmartButton from "../SmartButton/SmartButton";

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
            {props.isCloseButton ? (
                <SmartButton onClick={props.onClose} type="default">
                    Close
                </SmartButton>
            ) : null}
            {props.isEditButton ? (
                <SmartButton onClick={props.onEdit} type="default">
                    Edit
                </SmartButton>
            ) : null}
            {props.isCompletedButton ? (
                <SmartButton onClick={props.onCompleted} type="primary">
                    Completed
                </SmartButton>
            ) : null}
        </>
    );
}
