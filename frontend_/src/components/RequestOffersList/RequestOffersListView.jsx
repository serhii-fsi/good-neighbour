import { Flex } from "antd";

import "./RequestOffersListView.css";

/**
 * @param {object} props
 * @param {array} props.children
 */
export default function RequestOffersListView(props) {
    return (
        <section className="S-mt-xl S-mb-xl">
            <Flex className="S-mt-0 S-mb-0" gap="large" vertical align="stretch">
                <h2 className="F-base F-m F-medium F-black S-mt-0 S-mb-0">Offers</h2>
                {props.children}
            </Flex>
        </section>
    );
}
