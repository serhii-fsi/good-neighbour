import NavTop from "../components/NavTop/NavTop";
import RequestForm from "../components/RequestForm/RequestForm";

export default function RequestCreatePage() {
    return (
        <>
            <NavTop title={"Create Help Request"} isRootComponent={false} />
            <RequestForm />
        </>
    );
}
