import { useState } from "react";
import dayjs from "dayjs";

import { DatePicker, Flex, Space, Select } from "antd";

import FilterFormView from "./FilterFormView";

const FilterForm = () => {
    const [filterFieldsData, setFilterFieldData] = useState({
        dateFrom: null,
        toDate: null,
        selectedHelpTypes: null,
    });
    const selectOptions = [
        {
            label: "DIY",
            value: "diy",
        },
        {
            label: "Shopping",
            value: "shopping",
        },
        {
            label: "Cleaning",
            value: "cleaning",
        },
    ];

    const handleDateFromChange = (date, fromDateString) => {
        setFilterFieldData((prev) => {
            return { ...prev, dateFrom: fromDateString };
        });
    };

    const handleToDateChange = (date, toDateString) => {
        setFilterFieldData((prev) => {
            return { ...prev, toDate: toDateString };
        });
    };

    const handleTypeChange = (values) => {
        setFilterFieldData((prev) => {
            return { ...prev, selectedHelpTypes: values };
        });
    };

    const filterFields = {
        key: "1",
        label: "Filter",
        children: (
            <Flex gap="middle" vertical>
                <Flex justify="space-between">
                    <DatePicker placeholder="From Date" onChange={handleDateFromChange} />
                    <DatePicker
                        placeholder="To Date"
                        minDate={
                            filterFieldsData.dateFrom &&
                            dayjs(filterFieldsData.dateFrom, "YYYY-MM-DD")
                        }
                        onChange={handleToDateChange}
                    />
                </Flex>
                <Space.Compact>
                    <Select
                        allowClear
                        mode="multiple"
                        placeholder="Please select help type"
                        style={{ width: "100%" }}
                        options={selectOptions}
                        onChange={handleTypeChange}
                    ></Select>
                </Space.Compact>
            </Flex>
        ),
    };

    return (
        <>
            <FilterFormView filterFields={filterFields} />
        </>
    );
};

export default FilterForm;
