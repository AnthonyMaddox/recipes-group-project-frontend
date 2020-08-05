import React from "react";
import { storiesOf } from "@storybook/react";
import Image from "./Image.js";

const style = {
  backgroundColor: '#E27878',
  color: 'white',
  borderRadius: '2px',
  padding: '5px 25px',
  border: '#E27878'
}

storiesOf("Image", module).add("Primary Large", () => (
    <Image src="https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
))