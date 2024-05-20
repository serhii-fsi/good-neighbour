import { Link } from 'react-router-dom';

function SignupLogin() {
    return (
    <>
    <Link to="/signup" >
    <button type="button" className="block">Sign up</button>
    </Link>
    <Link to="/login">
    <button type="button" className="block">Log in</button>
    </Link>
    </>
    )
}

export default SignupLogin;