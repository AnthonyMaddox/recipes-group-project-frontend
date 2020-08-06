import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

let classList = [];
class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleISubmit = this.handleISubmit.bind(this);
    this.state = {
      newValue: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("help im posting");
    let title = document.getElementById("createTitle").value;
    let description = document.getElementById("createDescription").value;
    let instructions = document.getElementById("createInstructions").value;
    let picture = document.getElementById("createPicture").value;
    let cook = document.getElementById("createCook").value;
    let ingredientForm = document.querySelector(".ingredientForm");
    ingredientForm.classList.toggle("display");
    console.log(title);

    let res = "https://coders-cookout.herokuapp.com/recipes";

    axios
      .post(res, {
        title: title,
        description: description,
        instructions: instructions,
        picture: picture,
        cook: cook,
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ newValue: res.data._id });
      });
  }
  handleISubmit(e) {
    e.preventDefault();
    let idIngredientInput = document.querySelector("#idIngredientInput").value;
    let ingredient = document.querySelector("#ingredient").value;
    let amount = document.querySelector("#amount").value;
    let Ires = `https://coders-cookout.herokuapp.com/recipes/${idIngredientInput}/ingredients`;
    axios
      .post(Ires, {
        ingredient: ingredient,
        amount: amount,
      })
      .then((Ires) => {
        console.log(Ires.data.ingredients);
      });
  }

  render() {
    return (
      <div className="createForm">
        <form onSubmit={this.handleSubmit}>
          <h4 className="createFormTitle">Add A New Recipe!</h4>
          <div id="createForm">
            <div className="addRecipeDiv">
              <div>
                <p className="inputLabel">Title:</p>
                <input id="createTitle" type="text" />
              </div>
              <div>
                <p className="inputLabel">Description:</p>
                <textarea id="createDescription" />
              </div>
              <div>
                <p className="inputLabel">Instructions:</p>
                <textarea id="createInstructions" />
              </div>
              <div>
                <p className="inputLabel">Image URL Link:</p>
                <input
                  id="createPicture"
                  className={classList.join(" ")}
                  type="text"
                />
              </div>
              <div>
                <p className="inputLabel">Cook:</p>
                <input
                  id="createCook"
                  className={classList.join(" ")}
                  type="text"
                />
              </div>
            </div>
            <div className="bigButton">
              <br></br>
              <button className="createRecipeButton">Create Recipe and Add Ingredients</button>
            </div>
          </div>
        </form>
        {/* ingredients form */}
        <form className="ingredientForm" onSubmit={this.handleISubmit}>
          <div>
            <h4 className="createFormTitle">Your Recipe ID</h4>
            <div className="idField">
              <p>ID:</p>
              <input
                id="idIngredientInput"
                type="text"
                value={this.state.newValue}
              />
            </div>
          </div>
          <div>
            <p className="subtitle">Add Ingredient</p>
            <p className="inputLabel">Ingredient:</p>
            <input id="ingredient" type="text" />
          </div>
          <div>
            <p className="inputLabel">Amount:</p>
            <input id="amount" type="text" />
          </div>
          <div>
            <button className="formButton">Add Ingredient</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateForm;
//  if (props.large) {
//    classList.push("large");
// }
// if (props.small) {
//   classList.push("small");
// }
//value={this.state.value} onChange={this.handleChange}
{
  /* <div>
            <p className="subtitle">Delete Ingredient</p>
            <p>Ingredient:</p>
            <input
              id="addIngredient"
              className={classList.join(" ")}
              type="text"
            />
          </div>
          <div>
            <p>Amount:</p>
            <input id="addAmount" className={classList.join(" ")} type="text" />
          </div>
          <div>
            <button className="formButton">Delete Ingredient</button>
          </div> */
}
