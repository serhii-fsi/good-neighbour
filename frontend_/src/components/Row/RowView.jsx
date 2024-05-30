import { Flex } from "antd";

/**
 * @param {object} props
 * @param {string} props.justify flex-end
 * @param {string} props.gap small|middle|large
 * @param {array} props.children
 */
export default function RowView(props) {
    return (
        <Flex justify={props.justify} gap={props.gap}>
            {props.children}
        </Flex>
    );
}
