import { useState } from "react";

import HelpRequestFormView from "./HelpRequestFormView";

const HelpRequestForm = () => {
    const [helpRequestForm, setHelpRequestForm] = useState({
        title: null,
        date: null,
        time: null,
        allDay: true,
        helpType: null,
        description: "",
    });

    const handleFormChange = (changedValues, allValues) => {
        setHelpRequestForm(allValues);
    };

    const handleSubmit = () => {
        // Validation required
        console.log("Form has been submitted: ", helpRequestForm);
    };

    return (
        <HelpRequestFormView
            helpRequestForm={helpRequestForm}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default HelpRequestForm;
