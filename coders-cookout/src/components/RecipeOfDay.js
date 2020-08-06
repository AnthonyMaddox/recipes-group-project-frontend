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
        picture: data[4].picture,
        title: data[4].title,
        description: data[4].description,
        ingredients: data[4].ingredients,
        instructions: data[4].instructions,
      });
      console.log("Data has been received");
    });
  }

  render() {
    return (
      <div className="block">
        <div className="content">
          <div className="recipeOfDay item">
            <h2>Recipe of The Day</h2>
            <img
              className="recipeOfDay-img img-fluid"
              src={this.state.picture}
            />
            <h3>{this.state.title}</h3>
            <p className="pDescription">{this.state.description}</p>
            <ul>
              <List content={this.state.ingredients} />
            </ul>
            <p>{this.state.instructions}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeOfDay;
