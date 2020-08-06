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
        picture: data[9].picture,
        title: data[9].title,
        description: data[9].description,
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
            <h3>{this.state.title}</h3>
            <p className="pJumbo">{this.state.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbo;
