import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAxios } from "../hooks/useAxios";
import NavTop from "../components/NavTop/NavTop";
import RequestForm from "../components/RequestForm/RequestForm";

import config from "../config.json";
import getRoute from "../utils/getRoute";
import dayjs from "dayjs";
// const helpRequestDataExample = {
//     request: {
//         id: 3,
//         title: "Help Needed for Grocery Shopping",
//         help_type: "Shopping",
//         description:
//             "Hi! I'm Sarah, and I need assistance with grocery shopping once a week. Due to a recent injury, I am unable to carry heavy items. If you have a couple of hours to spare on a Monday or Thursday morning, your help would be greatly appreciated!",
//         created_at: "2024-10-05T14:48:00.000Z",
//         req_date: "2024-10-08T00:00:00.000Z",
//         status: "active",
//     },
// };

const RequestEditPage = () => {
    const { isLoading, sendRequest, contextHolder } = useAxios();
    const [requestFormData, setRequestFormData] = useState(null);
    const { help_request_id } = useParams();
    const navigate = useNavigate();
    const { routes } = config;

    const fetchHelpRequest = async () => {
        try {
            const {
                helpRequest: { request },
            } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/help-requests/${help_request_id}`
            );

            setRequestFormData({
                title: request.title,
                req_date: dayjs(request.req_date),
                help_type: request.help_type,
                description: request.description,
            });
        } catch (error) {}
    };

    useEffect(() => {
        fetchHelpRequest();
    }, []);

    const editHelpRequest = async () => {
        try {
            const { updatedHelpRequest } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/help-requests/${help_request_id}`,
                "PATCH",
                requestFormData
            );

            if (!isLoading && updatedHelpRequest) {
                navigate(getRoute(routes.requestPage, updatedHelpRequest.id));
            }
        } catch (error) {}
    };

    return (
        <>
            {contextHolder}
            <NavTop title={"Edit Help Request"} isRootComponent={false} />
            {requestFormData && (
                <RequestForm
                    formType={"edit"}
                    requestFormData={requestFormData}
                    setRequestFormData={setRequestFormData}
                    editHelpRequest={editHelpRequest}
                />
            )}
        </>
    );
};

export default RequestEditPage;
