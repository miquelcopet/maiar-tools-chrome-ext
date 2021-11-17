import React from "react";
import { Input } from "antd";

export default function AppInput({ hint, value, onChange, prefix }) {
  return (
    <Input
      addonBefore={hint}
      addonAfter={prefix}
      value={value}
      onChange={(e) => {
        onChange && onChange(e.target.value);
      }}
    />
  );
}
