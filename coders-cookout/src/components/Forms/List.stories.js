import React from "react";
import { storiesOf } from "@storybook/react";
import List from "./List.js";

const ingredients = ["Milk", "Sugar", "Flour"]

storiesOf("List", module).add("List", () => (
  <List content={ingredients}/>
))
