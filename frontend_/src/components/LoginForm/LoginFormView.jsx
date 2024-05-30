import { Link } from "react-router-dom";

import { Button, Form, Input } from "antd";

import { LockOutlined, UserOutlined } from "@ant-design/icons";

import "./LoginFormView.css";

/**
 * @param {function} props.handleLogin
 * @returns
 */

function LoginFormView(props) {
    return (
        <div className="LoginFormView__container">
            <h2>LOGIN</h2>
            <Form
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={props.handleLogin}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please provide your username!",
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please provide your password!",
                        },
                    ]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item className="LoginFormView__btnContainer">
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
                <div className="LoginFormView__link">
                    <p>Don't have an account?</p>
                    <Link to="/sign-up">Sign up!</Link>
                </div>
            </Form>
        </div>
    );
}

export default LoginFormView;
