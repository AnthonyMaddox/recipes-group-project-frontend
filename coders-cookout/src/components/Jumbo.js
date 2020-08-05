import React from "react";
import { Jumbotron } from "react-bootstrap";
import Image from "./Images/Image";

const Jumbo = () => {
  return (
    <Jumbotron>
      <Image src="./Assets/GrilledSalmon.jpeg"></Image>

      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
    </Jumbotron>
  );
};

export default Jumbo;
