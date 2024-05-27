import { DatePicker, Flex, Space, Select, Collapse } from "antd";

import dayjs from "dayjs";

import "./FilterFormView.css";

/**
 * @param {Object} props.filterFieldsData
 * @param {array} props.selectOptions
 * @param {function} props.handleDateFromChange
 * @param {function} props.handleToDateChange
 * @param {function} props.handleTypeChange
 * @returns
 */

const FilterFormView = (props) => {
    return (
        <>
            <Collapse
                className="FilterFormView__container"
                items={[
                    {
                        key: "1",
                        label: "Filter",
                        children: (
                            <Flex gap="middle" vertical>
                                <Flex justify="space-between">
                                    <DatePicker
                                        placeholder="From Date"
                                        onChange={props.handleDateFromChange}
                                    />
                                    <DatePicker
                                        placeholder="To Date"
                                        minDate={dayjs(
                                            props.filterFieldsData.dateFrom,
                                            "YYYY-MM-DD"
                                        )}
                                        onChange={props.handleToDateChange}
                                    />
                                </Flex>
                                <Space.Compact>
                                    <Select
                                        allowClear
                                        mode="multiple"
                                        placeholder="Please select help type"
                                        style={{ width: "100%" }}
                                        options={props.selectOptions}
                                        onChange={props.handleTypeChange}
                                    ></Select>
                                </Space.Compact>
                            </Flex>
                        ),
                    },
                ]}
                defaultActiveKey={["1"]}
            />
        </>
    );
};

export default FilterFormView;
