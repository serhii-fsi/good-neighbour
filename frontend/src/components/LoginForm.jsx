import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useNavigate, Link } from "react-router-dom";

import { Button, Checkbox, Form, Input } from 'antd';

import { LockOutlined, UserOutlined } from '@ant-design/icons';

function LoginForm() {

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setUser(values.username);
    navigate('/helpListView');
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <br/>Or <Link to="/signup">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
