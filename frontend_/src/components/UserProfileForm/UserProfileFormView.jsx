import { Form, Input, Slider } from "antd";

import SmartButton from "../SmartButton/SmartButton";

import "./UserProfileFormView.css";

/**
 *
 * @param {object} props.userProfileData
 * @param {function} props.handleFormChange
 * @param {function} props.handleSubmit
 */

const UserProfileFormView = ({ userProfileData, handleFormChange, handleSubmit }) => {
    return (
        <div className="UserProfileFormView__container">
            <Form
                layout="vertical"
                size="large"
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
                <Form.Item className="smartButton__container">
                    <SmartButton htmlType="submit" onClick={handleSubmit}>
                        Submit
                    </SmartButton>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UserProfileFormView;
