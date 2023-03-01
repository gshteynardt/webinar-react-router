import React from "react";
import "./Input.css";

const Input = (props) => {
  const { placeholder, handleChange } = props;

  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
  );
}

export default Input;
