import React from "react";
import { storiesOf } from "@storybook/react";
import CreateForm from "./CreateForm.js";
import UpdateForm from "./UpdateForm.js";
import DeleteForm from "./DeleteForm.js";

storiesOf("Form", module)
  .add("CreateForm", () => <CreateForm />)
  .add("UpdateForm", () => <UpdateForm />)
  .add("DeleteForm", () => <DeleteForm />);
