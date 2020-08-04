import React from "react";
import "./Button.css";

const Button = (props) => {
    let classList = [];
  return (
      <button className={classList.join(" ")}>
        {props.label}
      </button>
    );
  };

  export default Button;