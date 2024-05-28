import { useState } from "react";

import RequestFormView from "./RequestFormView";

/**
 * @param {function} props.createHelpRequest
 */

const RequestForm = (props) => {
    const [requestFormData, setRequestFormData] = useState({
        title: null,
        req_date: null,
        help_type: null,
        description: "",
    });

    const handleFormChange = (changedValues, allValues) => {
        const { title, req_date, description, help_type } = allValues;
        setRequestFormData(() => {
            return {
                title: title,
                req_date: req_date?.$d.toISOString(),
                description: description,
                help_type: help_type,
            };
        });
    };

    const handleSubmit = () => {
        const isFormValid = Object.values(requestFormData).every((input) => !!input);
        if (isFormValid) {
            props.createHelpRequest(requestFormData);
        }
    };

    return (
        <RequestFormView
            requestFormData={requestFormData}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default RequestForm;
