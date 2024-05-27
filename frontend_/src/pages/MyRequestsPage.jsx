import { Fragment } from "react";
import CardsList from "../components/CardsList/CardsList";
import NavTop from "../components/NavTop/NavTop";

export default function MyRequestsPage() {
    return (
        <>
            <NavTop title={"My Help Requests"} />

            <CardsList>
                <div key="1">Card 1</div>
                <div key="2">Card 1</div>
                <div key="3">Card 1</div>
            </CardsList>
        </>
    );
}
