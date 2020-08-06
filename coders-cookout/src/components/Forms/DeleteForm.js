import React, { Component } from "react";
import "./Form.css";
/*let types = ["IWB", "TextField"];
   if (types.includes(props.type)) {
     classList.push(`IWB-${props.type}`);
   }*/
//need to use e.target.value and set state
// convert to a class!!! set state and include something to hold the value of input.value
let classList = [];
class DeleteForm extends Component {
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
        <h4 className="createFormTitle">Delete A Recipe By ID</h4>
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
        <div className="bigButton">
          <br></br>
          <button>Delete Recipe</button>
        </div>
      </div>
    );
  }
}

export default DeleteForm;
