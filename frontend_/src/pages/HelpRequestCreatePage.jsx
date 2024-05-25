import NavTop from "../components/NavTop/NavTop";
import HelpRequestForm from "../components/HelpRequestForm/HelpRequestForm";

export default function HelpRequestCreatePage() {
    return (
        <>
            <NavTop title={"Create Help Request"} isRootComponent={false} />
            <HelpRequestForm />
        </>
    );
}
