import React, { Component } from "react";
import axios from "axios";
import "./ImagesColumn.css";
import Image from "./Images/Image";
import { Col } from "react-bootstrap";

class ImagesColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture1: "",
      title1: "",
      picture2: "",
      title2: "",
      picture3: "",
      title3: "",
    };
  }

  componentDidMount() {
    axios.get("https://coders-cookout.herokuapp.com/recipes").then((res) => {
      const data = res.data;

      this.setState({
        picture1: data[10].picture,
        title1: data[10].title,
        picture2: data[9].picture,
        title2: data[9].title,
        picture3: data[7].picture,
        title3: data[7].title,
      });
      console.log("Data has been received");
    });
  }

  render() {
    return (
      <div className="imagesBlock">
        <div className="imagesContent">
          <Col>
            <img className="thumb" src={this.state.picture1} />
            <h5>{this.state.title1}</h5>
          </Col>
          <Col>
            <img className="thumb" src={this.state.picture2} />
            <h5>{this.state.title2}</h5>
          </Col>
          <Col>
            <img className="thumb" src={this.state.picture3} />
            <h5>{this.state.title3}</h5>
          </Col>
        </div>
      </div>
    );
  }
}

export default ImagesColumn;
