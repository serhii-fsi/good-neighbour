import { useContext } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from "../contexts/User";
import { Alert, Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function SignupForm() {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            // fetch users from api
            if (values.username.toLowerCase() === 'unique username') {
                setUser(values.username.toLowerCase());
                navigate('/preferences', {state: values.username.toLowerCase()})
            } else throw new Error('error')
        } catch (error) {
            alert("username already taken");
        }
    }

    return (        
      <Form
        form={form}
        name="dependencies"
        autoComplete="off"
        style={{
          maxWidth: 600,
        }}
        layout="vertical"
        onFinish={onFinish}
      >

        <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input a Username!',
          },
        ]}
        >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" maxLength={24}/>

      </Form.Item>
        
        <Alert message="Your username must be: unique username. Password: any" type="info" showIcon />
  
        <Form.Item
          label="Password"
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Must contain... something"/>
        </Form.Item>
  
        {/* Field */}
        <Form.Item
          label="Confirm Password"
          name="password2"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input placeholder="Passwords must match"/>
        </Form.Item>

        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Continue to Sign-up page!
        </Button>
        <br/>Have an account? <Link to="/login">Login now!</Link>
        </Form.Item>

      </Form>
    );
}

export default SignupForm;
