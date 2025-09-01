import React from "react";
import { Form } from "react-bootstrap";

const MainInput = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  maxLength,
}) => {
  return (
    <div>
      <div className="border border-black rounded-2 w-100 p-2 mb-3">
        {label && (
          <p className="m-0" style={{ fontSize: "14px" }}>
            {label}
          </p>
        )}

        <Form.Control
          min={0}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={maxLength}
          className="w-100 bg-white border-0 text-black"
          placeholder={placeholder}
          style={{ height: "40px", outline: "none", boxShadow: "none" }}
        />
      </div>

      {/* Error Message */}
      {error && (
        <label
          className="text-danger mt-1 d-block"
          style={{ fontSize: "12px" }}
        >
          {error}
        </label>
      )}
    </div>
  );
};

export default MainInput;
