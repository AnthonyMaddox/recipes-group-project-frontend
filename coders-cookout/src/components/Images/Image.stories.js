import React from "react";
import { storiesOf } from "@storybook/react";
import Image from "./Image.js";

storiesOf("Image", module).add("Image Large", () => (
  <Image type="large" src="https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>    
))
storiesOf("Image", module).add("Image Medium", () => (
  <Image type="medium" src="https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
))
storiesOf("Image", module).add("Image Skinny", () => (
  <Image type="skinny" src="https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
))




    