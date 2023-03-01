import React from 'react';
import "./Button.css";

const Button = props => {
  const { text, ...rest } = props;

  return (
    <button {...rest} className="button">
      {text}
    </button>
  );
}

export default Button;
