import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useNavigate, Link } from "react-router-dom";

import { Button, Checkbox, Form, Input } from 'antd';

import { LockOutlined, UserOutlined } from '@ant-design/icons';

function LoginForm() {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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



// function LoginForm() {

//   const onFinish = (values) => {
//     setUser(values.email.split('@')[0]);
//     navigate('/helpListView');
//   };
//   const onFinishFailed = (errorInfo) => {
//     // handles failed submit
//     console.log('Failed:', errorInfo);
//   };

//   const { user, setUser } = useContext(UserContext);
//   const navigate = useNavigate();
  
//   return (
//     <>

//     <Form
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Email"
//       name="email"
//       rules={[
//         {
//           required: true,
//           type: "email",
//           message: 'Please input your email!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your password!',
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       name="remember"
//       valuePropName="checked"
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>

//   </>
//   )

// }

export default LoginForm;
