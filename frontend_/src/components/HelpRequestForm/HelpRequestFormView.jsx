import { DatePicker, Form, Input, Select, TimePicker, Switch } from "antd";

import SmartButton from "../SmartButton/SmartButton";

import "./HelpRequestFormView.css";

/**
 *
 * @param {object} props.helpRequestForm
 * @param {function} props.handleFormChange
 * @param {function} props.handleSubmit
 *
 */

const HelpRequestFormView = ({ helpRequestForm, handleFormChange, handleSubmit }) => {
    return (
        <div className="HelpRequestFormView__container">
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={helpRequestForm}
                onValuesChange={handleFormChange}
                size="large"
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    rules={[{ required: true, message: "Please provide title!" }]}
                    name="title"
                >
                    <Input placeholder="Title" />
                </Form.Item>
                <Form.Item
                    name="date"
                    rules={[{ required: true, message: "Please select the date!" }]}
                >
                    <DatePicker value={helpRequestForm.date} />
                </Form.Item>
                <Form.Item valuePropName="checked">
                    <TimePicker style={{ marginRight: "1rem" }} disabled />
                    <Switch checkedChildren="All day" defaultChecked value={true} />
                </Form.Item>
                <Form.Item
                    name="helpType"
                    rules={[{ required: true, message: "Please select the help type!" }]}
                >
                    <Select placeholder="Select Help Type">
                        <Select.Option value="shopping">Shopping</Select.Option>
                        <Select.Option value="diy">DIY</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="description">
                    <Input.TextArea
                        placeholder="Description"
                        autoSize={{ minRows: 5, maxRows: 10 }}
                    />
                </Form.Item>
                <div className="HelpRequestFormView__buttonContainer">
                    <Form.Item>
                        <SmartButton htmlType="submit" onClick={handleSubmit}>
                            Submit
                        </SmartButton>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};
export default HelpRequestFormView;
