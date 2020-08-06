import React, { Component } from "react";
import "./Form.css";
/*let types = ["IWB", "TextField"];
   if (types.includes(props.type)) {
     classList.push(`IWB-${props.type}`);
   }*/
//need to use e.target.value and set state
// convert to a class!!! set state and include something to hold the value of input.value
let classList = [];
class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "",
      value: "",
    };
  }

  render() {
    return (
      <div>
        <h4 className="createFormTitle">Update A Recipe By ID</h4>
        <div className="idField">
          <p>ID:</p>
          <input
            id="createTitle"
            className={classList.join(" ")}
            type="text"
            value={this.state.value}
            placeholder={this.state.placeholder}
          />
        </div>
        <div id="createForm" className="createForm">
          <div className="addRecipeDiv">
            <div>
              <p>Title:</p>
              <input
                id="createTitle"
                className={classList.join(" ")}
                type="text"
                value={this.state.value}
                placeholder={this.state.placeholder}
              />
            </div>
            <div>
              <p>Description:</p>
              <textarea />
            </div>
            <div>
              <p>Instructions:</p>
              <textarea />
            </div>
            <div>
              <p>Image URL Link:</p>
              <input
                id="textField"
                className={classList.join(" ")}
                type="text"
              />
            </div>
            <div>
              <p>Cook:</p>
              <input
                id="textField"
                className={classList.join(" ")}
                type="text"
              />
            </div>
          </div>
          <div className="ingedientsDiv">
            <div>
            <p className="subtitle">Add Ingredient</p>
              <p>Ingredient:</p>
              <input
                id="addIngredient"
                className={classList.join(" ")}
                type="text"
              />
            </div>
            <div>
              <p>Amount:</p>
              <input
                id="addAmount"
                className={classList.join(" ")}
                type="text"
              />
            </div>
            <div>
              <button>Add Ingredient</button>
            </div>
            <div>
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
              <input
                id="addAmount"
                className={classList.join(" ")}
                type="text"
              />
            </div>
            <div>
              <button>Delete Ingredient</button>
            </div>
          </div>
        </div>
        <div className="bigButton">
          <br></br>
          <button>Update Recipe</button>
        </div>
      </div>
    );
  }
}

export default UpdateForm;
