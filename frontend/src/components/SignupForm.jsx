import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../contexts/User";

function SignupForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSignupSubmit(event) {
        event.preventDefault();
        setEmail("");
        setPassword("");
        setUser(email.split("@")[0]);
        navigate('/preferences');
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    return (
    <form onSubmit={handleSignupSubmit}>
        <div>
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" placeholder="type your email" onChange={handleEmailChange} value={email}></input>
        </div>
        <div>
            <label htmlFor="password">Create password: </label>
            <input id="password" type="password" placeholder="type your password" onChange={handlePasswordChange} value={password}></input>
        </div>
    <button type="submit">Sign up</button>
    </form>
    )
}

export default SignupForm;
