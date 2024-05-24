import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AutoComplete,
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';

function Preferences() {

  const { state } = useLocation();
  
  const [minRadius, setMinRadius] = useState(10);
  const [maxRadius, setMaxRadius] = useState(9000);

  const handleSuffixChange = (suffix) => {
    if (suffix === 'metres') {
      setMinRadius(10);
      setMaxRadius(9000);
    } else {
      setMinRadius(0);
      setMaxRadius(9);
    }
  }

  const [form] = Form.useForm();
  const onFinish = (values) => {
    // handle submit
    console.log('Received values of form: ', values);
  };

  const { Option } = Select;

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="1">+1</Option>
        <Option value="44">+44</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        onChange={handleSuffixChange}
        style={{
          width: 85,
        }}
      >
        <Option value="km">km</Option>
        <Option value="metres">metres</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onEmailChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else if (!value.includes('@')) {
      setAutoCompleteResult(['@gmail.com', '@yahoo.com', '@outlook.com'].map((domain) => `${value}${domain}`));
    }
  };
  const emailOptions = autoCompleteResult.map((email) => ({
    label: email,
    value: email,
  }));

  const selectBefore = (
    <Form.Item name="http" noStyle>
      <Select style={{
          width: 90,
        }}>
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
      </Select>
    </Form.Item>    
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        username: state,
        prefix: '44',
        radius: 1000,
        suffix: 'metres',
        http: 'http://',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
      <AutoComplete options={emailOptions} onChange={onEmailChange} placeholder="email">
        <Input maxLength={255}/>
      </AutoComplete>
      </Form.Item>

      <Form.Item
        name="first-name"
        label="First name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
            whitespace: true,
          },
        ]}
      >
        <Input maxLength={100}/>
      </Form.Item>

      <Form.Item
        name="last-name"
        label="Last name"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
            whitespace: true,
          },
        ]}
      >
        <Input maxLength={100}/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder='Password must contain ... something'/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
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
        <Input.Password placeholder='Passwords must match'/>
      </Form.Item>

      <Form.Item
        name="username"
        label="Username"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
            whitespace: true,
          },
        ]}
      >
        <Input disabled={true}
          maxLength={24}
        />
      </Form.Item>

      <Form.Item
        name="postcode"
        label="Postcode"
        rules={[
          {
            required: true,
            message: 'Please input your postcode!',
            whitespace: true,
          },
        ]}
      >
        <Input maxLength={16}/>
      </Form.Item>

      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please input your address!',
            whitespace: true,
          },
        ]}
      >
        <Input maxLength={100}/>
      </Form.Item>

      <Form.Item
        name="age"
        label="Age"        
        rules={[
          {
            required: true,
            message: 'Please input your age!',
          },
        ]}
      >
        <InputNumber
          min={18}
          max={125}
          style={{
            maxWidth: 80,
            display: 'flex',
            alignItems: 'left'          
          }}
        />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
          {
            type: 'tel',
            message: 'The input is not valid phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          maxLength={24}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="radius"
        label="Limit your help to"
        rules={[
          {
            required: true,
            message: 'Increase this number to show you are willing to help others who live further away (up to 9 km)'
          },
        ]}
      >
        <InputNumber
          addonAfter={suffixSelector}
          min={minRadius}
          max={maxRadius}
          style={{
            maxWidth: 160,
            display: 'flex',
            alignItems: 'left'          
          }}
        />
      </Form.Item>

      <Form.Item
        name="avatar"
        label="Link to avatar image"
        rules={[
          {
            required: false,
            message: 'Please input the url of your avatar!',
          },
        ]}
      >
        <Input addonBefore={selectBefore} maxLength={100}/>
      </Form.Item>

      <Form.Item
        name="about"
        label="About you"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input.TextArea showCount maxLength={500} placeholder="Tell us a bit about yourself!"/>
      </Form.Item>

      <Form.Item
        name="additional"
        label="Additional contact info"
        rules={[
          {
            required: false
          },
        ]}
      >
        <Input.TextArea showCount maxLength={500} placeholder="e.g. best time to contact, a second phone number, ..."/>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="https://powervacamerica.com/wp-content/uploads/2016/01/shutterstock_36244156.jpg" target="_blank">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Preferences;
