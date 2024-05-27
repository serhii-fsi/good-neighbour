import { Collapse } from "antd";

import "./FilterFormView.css";

/**
 * @param {Object} props.filterFields
 * @returns
 */

const FilterFormView = (props) => {
    return (
        <>
            <Collapse
                className="FilterFormView__container"
                items={[props.filterFields]}
                defaultActiveKey={["1"]}
            />
        </>
    );
};

export default FilterFormView;
