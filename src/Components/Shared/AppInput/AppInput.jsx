import React from "react";
import { Input } from "antd";

export default function AppInput({ hint, value, onChange }) {
  return (
    <Input
      addonBefore={hint}
      value={value}
      onChange={(e) => {
        onChange && onChange(e.target.value);
      }}
    />
  );
}
