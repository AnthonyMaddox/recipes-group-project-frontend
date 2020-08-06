import React from "react";
import "../App.css";
import Image from "./Images/Image";
import "./Images/Image.css";
import Jumbo from "./Jumbo";
import RecipeOfDay from "./RecipeOfDay";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import ImagesColumn from "./ImagesColumn";

function Home() {
  return (
    <div>
      <Row>
        <Col>
          <RecipeOfDay />
        </Col>
        <Col xs={6}>
          <Jumbo />
        </Col>
        <Col>
          <ImagesColumn />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
