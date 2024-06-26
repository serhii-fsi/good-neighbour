import { Button } from "antd";

/**
 * @param {object} props
 * @param {boolean} props.isDisabled
 * @param {boolean} props.isLoading
 * @param {string} props.type primary|default|link|text
 * @param {string} props.htmlType button|submit|reset
 * @param {boolean} props.isDanger
 * @param {function} props.onClick
 * @param {array} props.children
 */
export default function SmartButtonView(props) {
    return (
        <Button
            disabled={props.isDisabled}
            loading={props.isLoading}
            htmlType={props.htmlType}
            type={props.type}
            danger={props.isDanger}
            onClick={props.onClick}
            shape="round"
            className="F-base F-xs F-regular"
        >
            {props.children}
        </Button>
    );
}
