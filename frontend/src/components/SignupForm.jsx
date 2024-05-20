import { useState } from "react";

function SignupForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignupSubmit(event) {
        event.preventDefault();
        setEmail("");
        setPassword("");
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
            <input id="email" placeholder="type your email" onChange={handleEmailChange} value={email}></input>
        </div>
        <div>
            <label htmlFor="password">Create password: </label>
            <input id="password" type="password" placeholder="type your password" onChange={handlePasswordChange} value={password}></input>
        </div>    
    <button>Sign up</button>
    </form>
    )
}

export default SignUpForm;
