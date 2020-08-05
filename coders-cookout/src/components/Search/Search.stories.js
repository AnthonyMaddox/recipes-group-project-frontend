import React from "react";
import { storiesOf } from "@storybook/react";

import Search from "./Search";

storiesOf("Search", module)
  .add("Form Small", () => <Forms label="Search" type="input" small />)
  .add("Form Medium", () => <Forms medium label="Search" type="input" />)
  .add("Form Large", () => <Forms large label="Search" type="input" />);
