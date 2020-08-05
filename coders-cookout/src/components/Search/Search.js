import React from "react";
import "./Search.css";

const Search = (props) => {
  let classList = [];
  let types = ["input", "dropDown"];

  if (types.includes(props.type)) {
    classList.push(`${props.type}`);
  }
  if (props.medium) {
    classList.push(`${props.type}-medium`);
  }
  if (props.large) {
    classList.push(`${props.type}-large`);
  }

  return (
    <div>
      <input className={classList.join(" ")} placeholder="Search" />
    </div>
  );
};

export default Search;
