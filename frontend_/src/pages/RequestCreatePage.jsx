import { useAxios } from "../hooks/useAxios";

import NavTop from "../components/NavTop/NavTop";
import RequestForm from "../components/RequestForm/RequestForm";

export default function RequestCreatePage() {
    const { isLoading, sendRequest } = useAxios();

    const createHelpRequest = async (body) => {
        try {
            const { newHelpRequest } = await sendRequest(
                `${import.meta.env.VITE_API_URL}/api/help-requests`,
                "POST",
                body
            );

            if (!isLoading && newHelpRequest) {
                console.log("Successfully created help request: ", newHelpRequest);
            }
        } catch (error) {}
    };
    return (
        <>
            <NavTop title={"Create Help Request"} isRootComponent={false} />
            <RequestForm createHelpRequest={createHelpRequest} />
        </>
    );
}
