import React from "react";
import "./Button.css";

const Button = (props) => {
  console.log(props.style)
  return (
      <button style={props.style}>
        {props.label}
      </button>
    );
  };

  export default Button;