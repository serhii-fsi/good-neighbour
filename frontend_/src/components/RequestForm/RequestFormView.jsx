import { useContext } from "react";
import { DatePicker, Form, Input, Select, TimePicker, Switch } from "antd";
import dayjs from "dayjs";

import { HelpTypesContext } from "../../context/help-types";
import SmartButton from "../SmartButton/SmartButton";

import "./RequestFormView.css";

/**
 *
 * @param {object} props.requestFormData
 * @param {function} props.handleFormChange
 * @param {function} props.handleSubmit
 *
 */

const RequestFormView = ({ requestFormData, handleFormChange, handleSubmit }) => {
    const { helpTypes } = useContext(HelpTypesContext);
    return (
        <div className="RequestFormView__container">
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={requestFormData}
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
                    name="req_date"
                    rules={[{ required: true, message: "Please select the date!" }]}
                >
                    <DatePicker value={requestFormData.req_date} minDate={dayjs()} />
                </Form.Item>
                <Form.Item valuePropName="checked">
                    <TimePicker style={{ marginRight: "1rem" }} disabled />
                    <Switch checkedChildren="All day" defaultChecked value={true} />
                </Form.Item>
                <Form.Item
                    name="help_type"
                    rules={[{ required: true, message: "Please select the help type!" }]}
                >
                    <Select placeholder="Select Help Type">
                        {helpTypes &&
                            helpTypes.map((helpType) => {
                                return (
                                    <Select.Option key={helpType.name} value={helpType.name}>
                                        {helpType.name}
                                    </Select.Option>
                                );
                            })}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="description"
                    rules={[{ required: true, message: "Please provide description!" }]}
                >
                    <Input.TextArea
                        placeholder="Description"
                        autoSize={{ minRows: 5, maxRows: 10 }}
                    />
                </Form.Item>
                <Form.Item className="RequestFormView__btnContainer">
                    <SmartButton htmlType="submit" onClick={handleSubmit}>
                        Submit
                    </SmartButton>
                </Form.Item>
            </Form>
        </div>
    );
};
export default RequestFormView;
