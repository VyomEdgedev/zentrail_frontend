import React from "react";
import { TextField } from "@mui/material";
import formStyle from "./inputStyle";
 
const TextInput = ({
  label,
  placeholder = "",
  type = "text",
  name,
  value,
  defaultValue,
  onChange,
  error = false,
  helperText = "",
  disabled = false,
  required = false,
  multiline = false,
  rows = 3,
  className = "",
  sx = {},
}) => {
  return (
    <>
    <label className="dm_sans font-medium text-[14px] leading-[25px]">{label}</label>
    <TextField
      size="small"
      fullWidth
      // label={label}
      name={name}
      type={type}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      error={error}
      helperText={helperText}
      disabled={disabled}
      required={required}
      multiline={multiline}
      rows={multiline ? rows : undefined}
      placeholder={placeholder}
      className={`bg-white ${className}`}
      sx={{ ...formStyle.input, ...sx }}
    />
    </>
  );
};

export default TextInput;
