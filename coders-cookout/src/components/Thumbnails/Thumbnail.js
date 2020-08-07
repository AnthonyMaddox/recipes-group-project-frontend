import React from "react";
import styled from "styled-components";
import { Container, Col, Image } from "react-bootstrap";

const Styles = styled.div`
  .navbar {
    background-color: #e27878;
    height: 5em;
  }
`;

export const Thumbnail = () => (
  <Styles>
    <Container>
      <Col>
        <Col xs={6} md={4}>
          <Image src="./Assets/FrenchToast.jpeg" thumbnail />
        </Col>
      </Col>
    </Container>
  </Styles>
);
