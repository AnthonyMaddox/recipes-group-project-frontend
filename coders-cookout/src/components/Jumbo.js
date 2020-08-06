import React, { Component } from "react";
import axios from "axios";
import "./Jumbo.css";
import Button from "./Buttons/Button";

class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      title: "",
      description: "",
    };
  }

  componentDidMount() {
    axios.get("https://coders-cookout.herokuapp.com/recipes").then((res) => {
      const data = res.data;

      this.setState({
        picture: data[11].picture,
        title: data[11].title,
        description: data[11].description,
      });
      console.log("Data has been received");
    });
  }

  render() {
    return (
      <div className="jumboBlock">
        <div className="jumboContent">
          <div className="jumbo item1">
            <img className="jumboPic" src={this.state.picture} />
            <hr></hr>
            <h3 className="h3Jumbo">{this.state.title}</h3>
            <h6 className="pJumbo">{this.state.description}</h6>
            <button>Get Recipe</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbo;
