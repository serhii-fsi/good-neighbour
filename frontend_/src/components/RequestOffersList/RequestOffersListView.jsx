import { Flex } from "antd";

import "./RequestOffersListView.css";

/**
 * @param {object} props
 * @param {array} props.children
 */
export default function RequestOffersListView(props) {
    return (
        <>
            Offers:
            <Flex className={"RequestOffersListView__container"} gap="30px" vertical align="center">
                {props.children}
            </Flex>
        </>
    );
}
