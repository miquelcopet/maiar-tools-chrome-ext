import React from "react";
import { InputNumber } from "antd";

export default function AppInputNumber({ hint, value, onChange }) {
  return (
    <InputNumber
      addonBefore={hint}
      value={value}
      defaultValue={0}
      onChange={(e) => {
        onChange && onChange(value);
      }}
    />
  );
}
