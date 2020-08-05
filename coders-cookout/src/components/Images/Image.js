import React from "react";
import "./Image.css";

const Image = (props) => {
  console.log(props.src)
  return (
      <img src={props.src} className={props.type} />
    );
  };
  
  export default Image;