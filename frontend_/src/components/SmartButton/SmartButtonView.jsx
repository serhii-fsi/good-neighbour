import { Button } from "antd";

/**
 * @param {object} props
 * @param {boolean} props.isDisabled
 * @param {boolean} props.isLoading
 * @param {string} props.type primary|default|link|text
 * @param {boolean} props.isDanger
 * @param {function} props.onClick
 * @param {array} props.children
 */
export default function SmartButtonView(props) {
    return (
        <Button
            disabled={props.isDisabled}
            loading={props.isLoading}
            type={props.type}
            danger={props.isDanger}
            onClick={props.onClick}
            shape="round"
        >
            {props.children}
        </Button>
    );
}
