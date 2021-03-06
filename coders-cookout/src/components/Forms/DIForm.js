import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

class DIForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("oh no I'm deleting an ingredient");
    let idRecipeDeleteInput = document.getElementById("idRecipeDeleteInput")
      .value;
    console.log(idRecipeDeleteInput);
    let idIngredientDeleteInput = document.getElementById(
      "idIngredientDeleteInput"
    ).value;
    let res = `https://coders-cookout.herokuapp.com/recipes/${idRecipeDeleteInput}/ingredients/${idIngredientDeleteInput}`;
    console.log(res);

    axios.delete(res).then((res) => {
      console.log(res);
      console.log(res.data);
      alert(`you deleted an ingredient!`);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4 className="createFormTitle">Delete An Ingredient From A Recipe</h4>
        <br></br>
        <div className="idField">
          <p>Recipe ID:</p>
          <input id="idRecipeDeleteInput" type="text" />
        </div>
        <div className="idField">
          <p>Ingredient ID:</p>
          <input id="idIngredientDeleteInput" type="text" />
        </div>
        <div className="deleteButton">
          <br></br>
          <button className="formButton">Delete Ingredient</button>
        </div>
      </form>
    );
  }
}

export default DIForm;
