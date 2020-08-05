import React, { Component } from "react";
import axios from "axios";
import "./Jumbo.css";

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
        picture: data[5].picture,
        title: data[5].title,
        description: data[5].description,
      });
      console.log("Data has been received");
    });
  }

  render() {
    return (
      <div className="jumbo item">
        <img src={this.state.picture} />
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default Jumbo;
