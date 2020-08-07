import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

let classList = [];
class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  render() {
    return (
      <div className="createForm">
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
              </div>
            </div>
            <div className="bigButton">
              <br></br>

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
          </div>
          <div>
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
          </div>
          <div>
            <p className="inputLabel">Amount:</p>
            <input id="deleteAmount" type="text" />
          </div>
          <div>
            <button className="ingDeleteButton">Delete Ingredient</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
