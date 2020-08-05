import React from "react";
import { storiesOf } from "@storybook/react";

import Search from "./Search";

storiesOf("Search", module)
  .add("Search Small", () => <Search label="Search" type="input" small />)
  .add("Search Medium", () => <Search medium label="Search" type="input" />)
  .add("Search Large", () => <Search large label="Search" type="input" />);
