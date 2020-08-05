import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

const style = {
  backgroundColor: '#E27878',
  color: 'white',
  borderRadius: '2px',
  padding: '5px 25px',
  border: '#E27878'
}


storiesOf("Button", module).add("Primary", () => (
    <Button label="Get Recipe" style={style}/>
))
