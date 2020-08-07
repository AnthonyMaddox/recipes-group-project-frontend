import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

let classList = [];
class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleISubmit = this.handleISubmit.bind(this);
    this.state = {
      placeholder: "",
      value: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("yikes im updating");
    let title = document.getElementById("updateTitle").value;
    let description = document.getElementById("updateDescription").value;
    let instructions = document.getElementById("updateInstructions").value;
    let picture = document.getElementById("updatePicture").value;
    let cook = document.getElementById("createCook").value;
    let idUpdateInput = document.getElementById("updateId").value;
    let res = `https://coders-cookout.herokuapp.com/recipes/${idUpdateInput}`;
    console.log(res);

    axios
      .put(res, {
        title: title,
        description: description,
        instructions: instructions,
        picture: picture,
        cook: cook,
      })
      .then(function (res) {
        console.log(res.data);
      });
  }
  handleISubmit(e) {
    e.preventDefault();
    let idRecipeInput = document.querySelector("#updateIngredientInputId")
      .value;
    let ingredient = document.querySelector("#updateIngredient").value;
    let amount = document.querySelector("#updateAmount").value;
    let Ires = `https://coders-cookout.herokuapp.com/recipes/${idRecipeInput}/ingredients`;
    axios
      .post(Ires, {
        ingredient: ingredient,
        amount: amount,
      })
      .then((Ires) => {
        console.log(Ires.data.ingredients);
        //alert(`you added a new ingredient ${Ires.data.ingredients[0].ingredient}`)
      });
  }

  render() {
    return (
      <div className="createForm">
<<<<<<< HEAD
        <form onSubmit={this.handleSubmit}>
          <h4 className="createFormTitle">Update Recipe By ID</h4>
          <div id="createForm">
            <div className="addRecipeDiv">
              <div className="idField">
                <p className="pId">ID:</p>
                <input id="idRecipeInput" type="text" />
              </div>
              <div>
                <p className="inputLabelUpdate">Title:</p>
                <input id="updateTitle" type="text" />
              </div>
              <div>
                <p className="inputLabelUpdate">Description:</p>
                <textarea id="updateDescription" />
              </div>
              <div>
                <p className="inputLabelUpdate">Instructions:</p>
                <textarea id="updateInstructions" />
              </div>
              <div>
                <p className="inputLabelUpdate">Image URL Link:</p>
                <input
                  id="updatePicture"
                  className={classList.join(" ")}
                  type="text"
                />
              </div>
              <div>
                <p className="inputLabelUpdate">Cook:</p>
                <input
                  id="updateCook"
                  className={classList.join(" ")}
                  type="text"
                />
=======
        <form onSubmit={this.handleSubmit} className="updateForm">
          <h4 className="createFormTitle">Update Recipe By ID</h4>
          <br></br>
          <div id="createForm">
            <div className="addRecipeDiv">
              <div className="idField">
                <p>ID:</p>
                <input id="updateId" type="text" />
              </div>
              <div>
                <p className="inputLabel">Title:</p>
                <input id="updateTitle" type="text" />
              </div>
              <div>
                <p className="inputLabel">Description:</p>
                <textarea id="updateDescription" />
              </div>
              <div>
                <p className="inputLabel">Instructions:</p>
                <textarea id="updateInstructions" />
              </div>
              <div>
                <p className="inputLabel">Image URL Link:</p>
                <input id="updatePicture" type="text" />
              </div>
              <div>
                <p className="inputLabel">Cook:</p>
                <input id="createCook" type="text" />
>>>>>>> d73f47ddf070bdb89209c98e6b46d2f9e7479156
              </div>
            </div>
            <div className="bigButton">
              <br></br>
<<<<<<< HEAD

              <button className="updateRecipeButton">Update Recipe</button>
            </div>
          </div>
        </form>
        {/* ingredients form */}
        <form className="ingredientUpdateForm" onSubmit={this.handleISubmit}>
          <div>
            <h4 className="createFormTitle">Add Ingredient By Recipe ID</h4>
            <div className="idField">
              <p className="addId">ID:</p>
              <input id="idIngredientInput" type="text" />
            </div>
          </div>
          <div>
            <p className="subtitle">Add Ingredient</p>
            <p className="Label">Ingredient:</p>
            <input id="ingredient" type="text" />
=======
              <button className="updateRecipeButton">Update Recipe</button>
            </div>
>>>>>>> d73f47ddf070bdb89209c98e6b46d2f9e7479156
          </div>
        </form>
        {/* ingredients form */}
        <form className="ingredientUpdateForm" onSubmit={this.handleISubmit}>
          <div>
<<<<<<< HEAD
            <p className="inputLabel">Amount:</p>
            <input id="amount" type="text" />
          </div>
          <div>
            <button className="ingredientButton">Add Ingredient</button>
          </div>
          <div>
            <h4 className="deleteTitle">Delete Ingredient By Ingredient ID</h4>
            <p className="subtitle">Delete Ingredient</p>
            <p className="inputLabel">Ingredient:</p>
            <input id="deleteIngredient" type="text" />
=======
            <h4 className="createFormTitle">Add Ingredient By Recipe ID</h4>
            <br></br>
            <div className="idField">
              <p>ID:</p>
              <input id="updateIngredientInputId" type="text" />
            </div>
          </div>
          <div>
            <p className="subtitle">Add Ingredient</p>
            <p className="inputLabel">Ingredient:</p>
            <input id="updateIngredient" type="text" />
>>>>>>> d73f47ddf070bdb89209c98e6b46d2f9e7479156
          </div>
          <div>
            <p className="inputLabel">Amount:</p>
            <input id="updateAmount" type="text" />
          </div>
          <br></br>
          <div>
<<<<<<< HEAD
            <button className="ingDeleteButton">Delete Ingredient</button>
=======
            <button className="formButton">Add Ingredient</button>
>>>>>>> d73f47ddf070bdb89209c98e6b46d2f9e7479156
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
