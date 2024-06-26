import { useState } from "react";

import RequestFormView from "./RequestFormView";

/**
 * @param {string} props.formType
 * @param {object} props.requestFormData
 * @param {function} props.setRequestFormData
 * @param {function} props.createHelpRequest
 * @param {function} props.editHelpRequest
 *
 */

const RequestForm = (props) => {
    const handleFormChange = (changedValues, allValues) => {
        const { title, req_date, description, help_type } = allValues;
        props.setRequestFormData(() => {
            return {
                title: title,
                req_date: req_date?.$d.toISOString(),
                description: description,
                help_type: help_type,
            };
        });
    };

    const handleSubmit = () => {
        const isFormValid = Object.values(props.requestFormData).every((input) => !!input);
        if (isFormValid && props.formType === "create") {
            props.createHelpRequest();
        } else if (isFormValid && props.formType === "edit") {
            props.editHelpRequest();
        }
    };

    return (
        <RequestFormView
            requestFormData={props.requestFormData}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default RequestForm;
