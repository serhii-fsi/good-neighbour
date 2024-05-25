import NavTop from "../components/NavTop/NavTop";
import SmartButton from "../components/SmartButton/SmartButton";

export default function HelpRequestPage() {
    return (
        <>
            <NavTop title={"Help Request"} isRootComponent={false} />
            <SmartButton onClick={(e) => alert(e)}>SmartButton</SmartButton>
        </>
    );
}
