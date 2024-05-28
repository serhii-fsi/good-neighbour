import { useState } from "react";

import FilterFormView from "./FilterFormView";

/**
 * @param {array} props.helpTypes
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
