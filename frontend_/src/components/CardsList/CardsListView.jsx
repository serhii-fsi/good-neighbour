import { Divider, Flex } from "antd";

import "./CardsListView.css";

/**
 * @param {object} props
 * @param {array} props.listWithDividers [{ isDivider, date } | component, ...] (optional)
 */
export default function CardsListView(props) {
    return (
        <Flex className={"CardsListView__container"} gap="middle" vertical align="center">
            {props.listWithDividers.map((item, index) => {
                return item.isDivider ? (
                    <Divider key={item.date} plain>
                        {item.date}
                    </Divider>
                ) : (
                    item
                );
            })}
        </Flex>
    );
}
