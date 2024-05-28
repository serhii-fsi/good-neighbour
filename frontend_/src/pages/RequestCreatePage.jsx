import { useNavigate } from "react-router-dom";

import { useAxios } from "../hooks/useAxios";

import NavTop from "../components/NavTop/NavTop";
import RequestForm from "../components/RequestForm/RequestForm";

import config from "../config.json";
import getRoute from "../utils/getRoute";

export default function RequestCreatePage() {
    const { isLoading, sendRequest, contextHolder } = useAxios();
    const { routes } = config;
    const navigate = useNavigate();

    const createHelpRequest = async (body) => {
        try {
            const { newHelpRequest } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/help-requests`,
                "POST",
                body
            );

            if (!isLoading && newHelpRequest) {
                navigate(getRoute(routes.requestPage, newHelpRequest.id));
            }
        } catch (error) {}
    };
    return (
        <>
            {contextHolder}
            <NavTop title={"Create Help Request"} isRootComponent={false} />
            <RequestForm createHelpRequest={createHelpRequest} />
        </>
    );
}
