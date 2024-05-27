import React from "react";

import { Descriptions, Slider } from "antd";

import "./UserProfileView.css";
import SmartButton from "../SmartButton/SmartButton";

/**
 *
 * @param {array} props.fields
 * @param {string} props.username
 * @param {function} props.handleClick
 *
 */

const UserProfileView = ({ fields, username, handleClick }) => {
    return (
        <div className="UserProfileView__container">
            <Descriptions
                title={<div style={{ textAlign: "center" }}>{username}</div>}
                layout="vertical"
                column={1}
            >
                {fields &&
                    fields.map((field) => (
                        <Descriptions.Item key={field.key} label={field.label} span={1}>
                            {field.children}
                        </Descriptions.Item>
                    ))}
                <Descriptions.Item label="Help Radius" className="UserProfileView__slider">
                    <Slider
                        defaultValue={2.5}
                        disabled
                        min={0.5}
                        max={10}
                        step={0.25}
                        tooltip={{
                            open: true,
                            formatter: (value) => (value > 2 ? `${value} miles` : `${value} mile`),
                        }}
                    />
                </Descriptions.Item>
            </Descriptions>
            <div className="UserProfileView__button">
                <SmartButton onClick={handleClick}>Edit</SmartButton>
            </div>
        </div>
    );
};
export default UserProfileView;
