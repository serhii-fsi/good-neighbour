import { useState } from "react";
import { Link } from 'react-router-dom';

function LoginForm() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginSubmit(event) {
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
  <form onSubmit={handleLoginSubmit}>
      <div>
          <label htmlFor="email">Email: </label>
          <input id="email" placeholder="type your email" onChange={handleEmailChange} value={email}></input>
      </div>
      <div>
          <label htmlFor="password">Password: </label>
          <input id="password" type="password" placeholder="type your password" onChange={handlePasswordChange} value={password}></input>
      </div>
      {/* logic to determine which path to take after login: */}
      <Link to={`/preferences` || `/ownHelplist`}>
        <button>Login</button>
      </Link>
  </form>
  )

}

export default LoginForm;
