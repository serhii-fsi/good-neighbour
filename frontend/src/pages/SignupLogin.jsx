import { Link, useNavigate } from 'react-router-dom';
import { Button, Flex } from "antd";

function SignupLogin() {

    const navigate = useNavigate();

    function handleLoginClick() {
        navigate('/login');
    }

    function handleSignupClick() {
        navigate('/signup');
    }

    return (
    <>
        <Flex gap="small" style={{ justifyContent: "center", alignItems: "center" }} wrap>
            <Button type="primary" onClick={handleLoginClick}>Login</Button>
            <Button onClick={handleSignupClick}>Signup</Button>
        </Flex>
        {/* <Link to="/login">
    <button type="button" className="block">Log in</button>
    </Link> */}
    </>
    )
}

export default SignupLogin;