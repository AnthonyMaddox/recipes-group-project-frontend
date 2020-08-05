import React, { Component } from "react";
import axios from "axios";
import "./RecipeOfDay.css";
import List from "./Forms/List";

class RecipeOfDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      title: "",
      description: "",
      ingredients: [],
      instructions: "",
    };
  }

  componentDidMount() {
    axios.get("https://coders-cookout.herokuapp.com/recipes").then((res) => {
      const data = res.data;
      console.log(data[0].ingredients);

      this.setState({
        picture: data[0].picture,
        title: data[0].title,
        description: data[0].description,
        ingredients: data[0].ingredients,
        instructions: data[0].instructions,
      });
      console.log("Data has been received");
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Recipe of The Day</h2>
        <img src={this.state.picture} />
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
        
        <p>{this.state.instructions}</p>
      </div>
    );
  }
}

export default RecipeOfDay;
