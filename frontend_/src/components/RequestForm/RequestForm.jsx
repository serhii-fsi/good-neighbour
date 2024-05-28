import { useState } from "react";

import RequestFormView from "./RequestFormView";

const RequestForm = () => {
    const [requestForm, setRequestForm] = useState({
        title: null,
        date: null,
        time: null,
        allDay: true,
        helpType: null,
        description: "",
    });

    const handleFormChange = (changedValues, allValues) => {
        setRequestForm(allValues);
    };

    const handleSubmit = () => {
        const isFormValid = Object.values(requestForm).every((input) => !!input);
        if (isFormValid) {
            console.log("Form has been submitted: ", requestForm);
        }
    };

    return (
        <RequestFormView
            requestForm={requestForm}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default RequestForm;
