import SmartButtonView from "./SmartButtonView";

/**
 * @param {object} props
 * @param {boolean} props.isHidden
 * @param {boolean} props.isDisabled
 * @param {boolean} props.isBlocked
 * @param {boolean} props.isLoading
 * @param {string} props.type primary|default|link|text
 * @param {string} props.htmlType button|submit|reset
 * @param {boolean} props.isDanger
 * @param {function} props.onClick
 * @param {array} props.children
 */
export default function SmartButton(props) {
    const onClickHook = (event) => {
        if (props.isBlocked) return;
        props.onClick(event);
    };

    if (props.isHidden) return <></>;

    return <SmartButtonView {...props} onClick={onClickHook} />;
}
