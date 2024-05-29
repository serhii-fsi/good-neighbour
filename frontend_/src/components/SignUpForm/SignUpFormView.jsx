import { Link } from "react-router-dom";
import { Form, Input, Slider, Space } from "antd";

import SmartButton from "../SmartButton/SmartButton";

import UserProfileForm from "../UserProfileForm/UserProfileForm";

import "./SignUpFormView.css";

const SignUpFormView = ({ userProfileData, handleFormChange, handleSubmit }) => {
    return (
        <div className="SignUpFormView__container">
            <h2>SIGN UP</h2>
            <Form
                layout="vertical"
                size="middle"
                initialValues={userProfileData}
                onValuesChange={handleFormChange}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Please provide username" }]}
                >
                    <Input placeholder="Enter your first name" />
                </Form.Item>
                <Form.Item
                    label="First Name"
                    name="first_name"
                    rules={[{ required: true, message: "Please provide first name" }]}
                >
                    <Input placeholder="Enter your first name" />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="last_name"
                    rules={[{ required: true, message: "Please provide last name" }]}
                >
                    <Input placeholder="Enter your last name" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please provide password",
                        },
                    ]}
                >
                    <Input
                        minLength={8}
                        type="password"
                        placeholder="Must contain at least 8 characters"
                    />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="password2"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm password",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("The new password does not match!")
                                );
                            },
                        }),
                    ]}
                >
                    <Input minLength={8} type="password" placeholder="Passwords must match" />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="about"
                    rules={[{ required: true, message: "Please provide description" }]}
                >
                    <Input.TextArea placeholder="Description" />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: "Please provide city, street, build, apartment etc.",
                        },
                    ]}
                >
                    <Input placeholder="Enter your address" />
                </Form.Item>
                <Form.Item
                    label="Postcode"
                    name="postcode"
                    rules={[{ required: true, message: "Please provide postcode" }]}
                >
                    <Input placeholder="Enter your postcode" />
                </Form.Item>
                <Form.Item label="Phone Number" name="phone_number">
                    <Input placeholder="Enter your phone number" />
                </Form.Item>
                <Form.Item label="Additional information" name="additional_contacts">
                    <Input.TextArea placeholder="Enter best time to contact or second phone number or any other information you want to share to an agreed helper or requester" />
                </Form.Item>
                <Form.Item label="Help Radius" name="help_radius">
                    <Slider
                        min={0.5}
                        max={10}
                        step={0.25}
                        tooltip={{
                            open: true,
                            formatter: (value) => (value >= 2 ? `${value} miles` : `${value} mile`),
                        }}
                    />
                </Form.Item>
                <Form.Item className="UserProfileFormView__btnContainer">
                    <SmartButton htmlType="submit" onClick={handleSubmit}>
                        Create Account
                    </SmartButton>
                </Form.Item>
                <Space className="LoginFormView__link">
                    <p>Already have an account?</p>
                    <Link to="/login">Sign in!</Link>
                </Space>
            </Form>
        </div>
    );
};

export default SignUpFormView;
