import { Divider, Flex } from "antd";

import "./CardsListView.css";

/**
 * @param {object} props
 * @param {array} props.listWithDividers [{ isDivider, date } | component, ...] (optional)
 */
export default function CardsListView(props) {
    return (
        <Flex className="S-mt-l S-mb-l" gap="40px" vertical>
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
