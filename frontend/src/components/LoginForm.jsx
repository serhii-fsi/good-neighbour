import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { useNavigate } from "react-router-dom";

function LoginForm() {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginSubmit(event) {
      // needs to handle logged in user context, can do this on Preferences instead of here:
      event.preventDefault();
      setUser(email.split('@')[0]);
      setEmail("");
      setPassword("");
      navigate('/helpListView')

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
          <input id="email" type="email" placeholder="type your email" onChange={handleEmailChange} value={email}></input>
      </div>
      <div>
          <label htmlFor="password">Password: </label>
          <input id="password" type="password" placeholder="type your password" onChange={handlePasswordChange} value={password}></input>
      </div>
      {/* logic to determine which path to take after login: */}
      {/* <Link to={`/helpListView` || `/preferences`}> */}
        <button type="submit">Login</button>
  </form>
  )

}

export default LoginForm;
