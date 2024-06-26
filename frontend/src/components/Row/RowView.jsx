import { Flex } from "antd";

/**
 * @param {object} props
 * @param {string} props.justify flex-end
 * @param {string} props.align center
 * @param {string} props.gap small|middle|large
 * @param {string} props.className
 * @param {array} props.children
 */
export default function RowView(props) {
    return (
        <Flex
            justify={props.justify}
            align={props.align}
            gap={props.gap}
            className={props.className}
        >
            {props.children}
        </Flex>
    );
}
