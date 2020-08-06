import React from "react";
import { storiesOf } from "@storybook/react";
import List from "./List.js";

//const ingredients = [{_id: "1", name:"Milk", amount: "1cup"}, {"Sugar"}, {"Flour"}]
const ingredients = [{_id: "5f29a06a7afbf200047df4ca", ingredient: "Banana", amount: "1"}, {_id: "5f29a06a7afbf200047df4cb", ingredient: "Milk", amount: "1 cup"},{_id: "5f29a06a7afbf200047df4cc", ingredient: "Powdered Cinnamon", amount: "a pinch"},
{_id: "5f29a06a7afbf200047df4cd", ingredient: "Ice cubes", amount: "as needed"}]

storiesOf("List", module).add("List", () => (
  <List content={ingredients}/>
))
//only need one module
storiesOf("List", module).add("List Checkbox", () => (
    <List type="checkbox" content={ingredients}/>
))
