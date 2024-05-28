import { useState } from "react";

import FilterFormView from "./FilterFormView";

/**
 * @param {array} props.helpTypes
 * @param {function} props.setSearchParams
 */

const FilterForm = (props) => {
    const [filterFieldsData, setFilterFieldData] = useState({
        dateFrom: null,
        toDate: null,
        selectedHelpTypes: null,
    });
    const selectOptions = props.helpTypes?.map(({ name }) => {
        return { label: name, value: name };
    });

    const constructQueryString = (data) => {
        const nonNullData = Object.entries(data)
            .filter(([_, value]) => value !== null)
            .reduce((acc, [key, value]) => {
                acc[key] = key === "selectedHelpTypes" ? value.join(",") : value;
                return acc;
            }, {});

        return new URLSearchParams(nonNullData).toString();
    };

    const queryString = constructQueryString(filterFieldsData);

    const handleDateFromChange = (date, fromDateString) => {
        setFilterFieldData((prev) => {
            return { ...prev, dateFrom: date?.$d.toISOString() };
        });
        props.setSearchParams(queryString);
    };

    const handleToDateChange = (date, toDateString) => {
        setFilterFieldData((prev) => {
            return { ...prev, toDate: date?.$d.toISOString() };
        });
        props.setSearchParams(queryString);
    };

    const handleTypeChange = (values) => {
        setFilterFieldData((prev) => {
            return { ...prev, selectedHelpTypes: values };
        });
        props.setSearchParams(queryString);
    };

    return (
        <>
            <FilterFormView
                filterFieldsData={filterFieldsData}
                selectOptions={selectOptions}
                handleDateFromChange={handleDateFromChange}
                handleToDateChange={handleToDateChange}
                handleTypeChange={handleTypeChange}
            />
        </>
    );
};

export default FilterForm;
