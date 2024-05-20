import { Link, Routes, Route } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

function SignupLogin() {
    return (
    <>
    <Link to="/signup" >
    <button type="button" className="block">Sign up</button>
    </Link>
    <Link to="/login">
    <button type="button" className="block">Log in</button>
    </Link>
    <div className='column'>
    <Routes>
    <Route path="/signup" element={<SignupForm /> } />
    <Route path="/login" element={<LoginForm /> }  />
    </Routes>
    </div>
    </>
    )
}

export default SignupLogin;