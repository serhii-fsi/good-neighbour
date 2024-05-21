import { useState } from "react"

function Expand({ children, contentDescriptor }) {
    const [isShowing, setIsShowing] = useState(false);

    function handleClick() {
        setIsShowing(!isShowing)
    }

    return (
        <>
        <button onClick={handleClick}>{isShowing ? "Hide" : "Show"} {contentDescriptor}</button>
        <>{isShowing && children}</>
        </>
    )

}

export default Expand